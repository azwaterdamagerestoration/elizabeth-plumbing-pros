const fs = require("fs");
const path = require("path");

const appDir = path.join(__dirname, "..", ".next", "server", "app");
const publicDir = path.join(__dirname, "..", "public");

const EXPECTED_PHONE_DISPLAY = "(908) 738-8526";
const EXPECTED_PHONE_DIGITS = "9087388526";
const BASE_URL = "https://elizabethplumbingpros.com";

// Known routes and redirects
const validRoutes = new Set([
  "/",
  "/about",
  "/accessibility",
  "/blog",
  "/contact",
  "/disclaimer",
  "/editorial-policy",
  "/faq",
  "/how-it-works",
  "/privacy",
  "/resources",
  "/service-areas",
  "/services",
  "/site-map",
  "/terms",
  "/robots.txt",
  "/sitemap.xml",
  // Blog posts
  "/blog/common-causes-slow-drains-prevention",
  "/blog/signs-of-hidden-plumbing-leak",
  "/blog/signs-water-heater-needs-repair",
  "/blog/what-to-do-when-pipe-bursts",
  "/blog/sewer-lateral-responsibility-nj",
  "/blog/hydro-jetting-vs-snaking",
  "/blog/trenchless-sewer-repair-vs-traditional-digging",
  "/blog/concrete-slab-leak-symptoms-repair",
  "/blog/galvanized-pipes-vs-copper-vs-pex",
  "/blog/pseg-gas-red-tag-meaning-steps",
  "/blog/tankless-vs-tank-water-heaters-nj",
  "/blog/why-sump-pump-running-constantly",
  "/blog/do-you-need-water-softener-union-county",
  "/blog/commercial-kitchen-grease-trap-regulations-nj",
  "/blog/why-annual-backflow-testing-notice-nj",
  // Locations
  "/locations/plumber-cranford-nj",
  "/locations/plumber-fanwood-nj",
  "/locations/plumber-roselle-nj",
  "/locations/plumber-union-nj",
  "/locations/plumber-westfield-nj",
  // Services
  "/services/clogged-drain-repair-elizabeth-nj",
  "/services/drain-cleaning-elizabeth-nj",
  "/services/emergency-plumbing-elizabeth-nj",
  "/services/faucet-repair-elizabeth-nj",
  "/services/garbage-disposal-repair-elizabeth-nj",
  "/services/leak-detection-elizabeth-nj",
  "/services/pipe-repair-elizabeth-nj",
  "/services/sewer-line-repair-elizabeth-nj",
  "/services/sump-pump-services-elizabeth-nj",
  "/services/toilet-repair-elizabeth-nj",
  "/services/water-heater-installation-elizabeth-nj",
  "/services/water-heater-repair-elizabeth-nj",
  "/services/water-softener-installation-elizabeth-nj",
  "/services/gas-line-repair-elizabeth-nj",
  "/services/slab-leak-detection-elizabeth-nj",
  "/services/copper-repiping-elizabeth-nj",
  "/services/hydro-jetting-elizabeth-nj",
  "/services/trenchless-sewer-repair-elizabeth-nj",
  "/services/kitchen-bathroom-plumbing-elizabeth-nj",
  "/services/commercial-plumbing-elizabeth-nj",
  "/services/backflow-testing-prevention-elizabeth-nj",
]);

// Redirect routes
const redirectRoutes = new Map([
  ["/locations/plumber-elizabeth-nj", "/"],
  ["/locations/plumber-elizabeth", "/"],
  ["/locations/elizabeth-nj", "/"],
  ["/locations/elizabeth", "/"],
  ["/service-areas/elizabeth", "/"],
  ["/locations/westfield-nj", "/locations/plumber-westfield-nj"],
  ["/locations/union-nj", "/locations/plumber-union-nj"],
  ["/locations/cranford-nj", "/locations/plumber-cranford-nj"],
  ["/locations/roselle-nj", "/locations/plumber-roselle-nj"],
  ["/locations/fanwood-nj", "/locations/plumber-fanwood-nj"],
  ["/service-areas/westfield", "/locations/plumber-westfield-nj"],
  ["/service-areas/union", "/locations/plumber-union-nj"],
  ["/service-areas/cranford", "/locations/plumber-cranford-nj"],
  ["/service-areas/roselle", "/locations/plumber-roselle-nj"],
  ["/service-areas/fanwood", "/locations/plumber-fanwood-nj"],
  ["/locations", "/service-areas"],
  ["/privacy-policy", "/privacy"],
  ["/terms-and-conditions", "/terms"],
  ["/sitemap", "/site-map"],
  ["/reviews", "/about"],
]);

function getAllHtmlFiles(dir, fileList = []) {
  if (!fs.existsSync(dir)) return fileList;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      getAllHtmlFiles(fullPath, fileList);
    } else if (file.endsWith(".html") && !file.startsWith("_global-error")) {
      fileList.push(fullPath);
    }
  }
  return fileList;
}

function getRouteFromPath(htmlPath) {
  const rel = path.relative(appDir, htmlPath).replace(/\\/g, "/");
  if (rel === "index.html") return "/";
  if (rel.endsWith(".html")) {
    return "/" + rel.replace(/\.html$/, "");
  }
  return "/" + rel;
}

const htmlFiles = getAllHtmlFiles(appDir);

const results = {
  totalPages: htmlFiles.length,
  passed: 0,
  warnings: [],
  errors: [],
  pages: [],
};

console.log(`Auditing ${htmlFiles.length} rendered HTML pages...\n`);

for (const filePath of htmlFiles) {
  const route = getRouteFromPath(filePath);
  const html = fs.readFileSync(filePath, "utf-8");

  // Skip redirect pages from certain audits
  const isRedirectPage = route.startsWith("/service-areas/") && route !== "/service-areas";

  const pageReport = {
    route,
    title: null,
    metaDescription: null,
    canonical: null,
    h1Count: 0,
    h1Text: [],
    brokenLinks: [],
    redirectLinks: [],
    phoneCheck: { pass: true, mismatches: [] },
    imagesMissingAlt: [],
    jsonLdSchemas: [],
    errors: [],
    warnings: [],
  };

  if (isRedirectPage) {
    // Just verify redirect mechanism
    pageReport.isRedirect = true;
    results.pages.push(pageReport);
    continue;
  }

  // 1. Title Tag
  const titleMatch = html.match(/<title[^>]*>([^<]*)<\/title>/i);
  if (titleMatch) {
    pageReport.title = titleMatch[1].trim();
    if (!pageReport.title) {
      pageReport.errors.push("Empty <title> tag");
    } else if (pageReport.title.length < 20) {
      pageReport.warnings.push(`Short title (${pageReport.title.length} chars): "${pageReport.title}"`);
    } else if (pageReport.title.length > 70) {
      pageReport.warnings.push(`Long title (${pageReport.title.length} chars): "${pageReport.title}"`);
    }
  } else {
    pageReport.errors.push("Missing <title> tag");
  }

  // 2. Meta Description
  const metaDescMatch = html.match(/<meta[^>]+name=["']description["'][^>]+content=["']([^"']*)["']/i) ||
                        html.match(/<meta[^>]+content=["']([^"']*)["'][^>]+name=["']description["']/i);
  if (metaDescMatch) {
    pageReport.metaDescription = metaDescMatch[1].trim();
    if (!pageReport.metaDescription) {
      pageReport.errors.push("Empty meta description");
    } else if (pageReport.metaDescription.length < 50) {
      pageReport.warnings.push(`Short meta description (${pageReport.metaDescription.length} chars)`);
    } else if (pageReport.metaDescription.length > 170) {
      pageReport.warnings.push(`Long meta description (${pageReport.metaDescription.length} chars)`);
    }
  } else if (route !== "/_not-found") {
    pageReport.errors.push("Missing meta description");
  }

  // 3. Canonical URL
  const canonicalMatch = html.match(/<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']*)["']/i) ||
                         html.match(/<link[^>]+href=["']([^"']*)["'][^>]+rel=["']canonical["']/i);
  if (canonicalMatch) {
    pageReport.canonical = canonicalMatch[1].trim();
    if (!pageReport.canonical.startsWith("https://elizabethplumbingpros.com")) {
      pageReport.errors.push(`Canonical URL does not match production domain: ${pageReport.canonical}`);
    }
  } else if (route !== "/_not-found") {
    pageReport.warnings.push("Missing canonical link");
  }

  // 3b. OpenGraph Protocol Validation (ogp.me standards)
  if (route !== "/_not-found") {
    const ogTypeMatch = html.match(/<meta[^>]+property=["']og:type["'][^>]+content=["']([^"']*)["']/i);
    const ogUrlMatch = html.match(/<meta[^>]+property=["']og:url["'][^>]+content=["']([^"']*)["']/i);
    const ogTitleMatch = html.match(/<meta[^>]+property=["']og:title["'][^>]+content=["']([^"']*)["']/i);
    const ogImageMatch = html.match(/<meta[^>]+property=["']og:image["'][^>]+content=["']([^"']*)["']/i);

    if (!ogTypeMatch) {
      pageReport.errors.push("Missing required OpenGraph property: og:type");
    }
    if (!ogTitleMatch) {
      pageReport.errors.push("Missing required OpenGraph property: og:title");
    }
    if (!ogImageMatch) {
      pageReport.errors.push("Missing required OpenGraph property: og:image");
    }
    if (ogUrlMatch && pageReport.canonical) {
      const ogUrl = ogUrlMatch[1].trim();
      if (ogUrl !== pageReport.canonical) {
        pageReport.errors.push(`OpenGraph URL (${ogUrl}) does not match Canonical URL (${pageReport.canonical})`);
      }
    } else if (!ogUrlMatch) {
      pageReport.errors.push("Missing required OpenGraph property: og:url");
    }
  }

  // 4. H1 Tag
  const h1Matches = [...html.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/gi)];
  pageReport.h1Count = h1Matches.length;
  pageReport.h1Text = h1Matches.map(m => m[1].replace(/<[^>]+>/g, "").trim());

  if (route !== "/_not-found") {
    if (pageReport.h1Count === 0) {
      pageReport.errors.push("Missing H1 heading");
    } else if (pageReport.h1Count > 1) {
      pageReport.warnings.push(`Multiple H1 headings found (${pageReport.h1Count}): "${pageReport.h1Text.join('", "')}"`);
    }
  }

  // 5. Phone Numbers & Tel links
  const telMatches = [...html.matchAll(/href=["'](tel:[^"']+)["']/gi)];
  for (const match of telMatches) {
    const telHref = match[1];
    const cleanedDigits = telHref.replace(/\D/g, "");
    if (!cleanedDigits.endsWith(EXPECTED_PHONE_DIGITS)) {
      pageReport.phoneCheck.pass = false;
      pageReport.phoneCheck.mismatches.push(`Incorrect tel link: ${telHref}`);
      pageReport.errors.push(`Incorrect tel link: ${telHref}`);
    }
  }

  // Search for rogue phone numbers in text (e.g. 555-xxx-xxxx)
  const textPhoneRegex = /\b(\d{3})[-. ](\d{3})[-. ](\d{4})\b/g;
  let textPhoneMatch;
  while ((textPhoneMatch = textPhoneRegex.exec(html)) !== null) {
    const rawMatch = textPhoneMatch[0];
    const digits = rawMatch.replace(/\D/g, "");
    // Check if it's not our phone number and not a zip code or code pattern
    if (digits !== EXPECTED_PHONE_DIGITS && !digits.startsWith("072") && !digits.startsWith("070")) {
      // Check if it looks like a phone number
      if (["800", "888", "877", "866", "555", "123", "999"].includes(textPhoneMatch[1])) {
        pageReport.warnings.push(`Potential placeholder phone number detected: ${rawMatch}`);
      }
    }
  }

  // 6. Broken Internal Links
  const linkMatches = [...html.matchAll(/<a[^>]+href=["']([^"']+)["']/gi)];
  for (const match of linkMatches) {
    let href = match[1].trim();
    if (href.startsWith("http://") || href.startsWith("https://")) {
      if (href.startsWith(BASE_URL)) {
        href = href.replace(BASE_URL, "") || "/";
      } else {
        continue; // external link
      }
    }

    if (href.startsWith("#") || href.startsWith("tel:") || href.startsWith("mailto:") || href.startsWith("javascript:")) {
      continue;
    }

    // Strip hash or query string
    const cleanHref = href.split("#")[0].split("?")[0] || "/";

    // Check if redirect link
    if (redirectRoutes.has(cleanHref)) {
      pageReport.redirectLinks.push({ from: cleanHref, to: redirectRoutes.get(cleanHref) });
    } else if (!validRoutes.has(cleanHref) && cleanHref !== "" && cleanHref !== "/") {
      // Check if it's a static file
      const staticPath = path.join(publicDir, cleanHref);
      if (!fs.existsSync(staticPath)) {
        pageReport.brokenLinks.push(cleanHref);
        pageReport.errors.push(`Broken internal link: ${cleanHref}`);
      }
    }
  }

  // 7. Image Alt Attributes
  const imgMatches = [...html.matchAll(/<img([^>]+)>/gi)];
  for (const match of imgMatches) {
    const imgTag = match[1];
    const hasAlt = /alt=["'][^"']*["']/i.test(imgTag);
    if (!hasAlt) {
      pageReport.imagesMissingAlt.push(imgTag.slice(0, 50));
      pageReport.warnings.push("Image missing alt attribute");
    }
  }

  // 8. JSON-LD Structured Data
  const jsonLdMatches = [...html.matchAll(/<script[^>]+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)];
  for (const match of jsonLdMatches) {
    try {
      const parsed = JSON.parse(match[1]);
      const type = parsed["@type"] || (parsed["@graph"] ? "Graph" : "Unknown");
      pageReport.jsonLdSchemas.push(type);

      // Check for forbidden fake reviews / aggregate ratings
      if (parsed.aggregateRating || (parsed["@graph"] && parsed["@graph"].some(n => n.aggregateRating))) {
        pageReport.errors.push("Forbidden fabricated aggregateRating found in schema");
      }
    } catch (e) {
      pageReport.errors.push(`Malformed JSON-LD schema: ${e.message}`);
    }
  }

  if (pageReport.errors.length > 0) {
    results.errors.push({ route, errors: pageReport.errors });
  }
  if (pageReport.warnings.length > 0) {
    results.warnings.push({ route, warnings: pageReport.warnings });
  }

  results.pages.push(pageReport);
}

console.log("=== QA AUDIT RESULTS ===");
console.log(`Total Pages Audited: ${results.pages.length}`);
console.log(`Pages with Errors: ${results.errors.length}`);
console.log(`Pages with Warnings: ${results.warnings.length}\n`);

if (results.errors.length > 0) {
  console.log("ERRORS DETECTED:");
  for (const err of results.errors) {
    console.log(`  [${err.route}]:`);
    for (const msg of err.errors) {
      console.log(`    - ${msg}`);
    }
  }
} else {
  console.log("SUCCESS: 0 Errors detected across all pages!");
}

if (results.warnings.length > 0) {
  console.log("\nWARNINGS DETECTED:");
  for (const warn of results.warnings) {
    console.log(`  [${warn.route}]:`);
    for (const msg of warn.warnings) {
      console.log(`    - ${msg}`);
    }
  }
}

// Check for redirect link usage
const redirectUsages = [];
for (const p of results.pages) {
  if (p.redirectLinks && p.redirectLinks.length > 0) {
    redirectUsages.push({ route: p.route, links: p.redirectLinks });
  }
}

if (redirectUsages.length > 0) {
  console.log(`\nInternal Links Pointing to Redirects (${redirectUsages.length} pages):`);
  for (const u of redirectUsages) {
    console.log(`  [${u.route}]: ${u.links.map(l => `${l.from} -> ${l.to}`).join(", ")}`);
  }
}

