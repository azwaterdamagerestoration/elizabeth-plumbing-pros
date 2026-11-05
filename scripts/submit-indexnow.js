/**
 * IndexNow Submission Script for Elizabeth Plumbing Pros
 * Submits all canonical URLs to the IndexNow API (Bing, Yandex, Naver, Seznam).
 */

const https = require("https");

const HOST = "elizabethplumbingpros.com";
const KEY = "c7e8a4918e624bf9a2e6f437c3589b21";
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;

const urlList = [
  `https://${HOST}/`,
  `https://${HOST}/about`,
  `https://${HOST}/contact`,
  `https://${HOST}/how-it-works`,
  `https://${HOST}/services`,
  `https://${HOST}/service-areas`,
  `https://${HOST}/faq`,
  `https://${HOST}/resources`,
  `https://${HOST}/blog`,
  `https://${HOST}/editorial-policy`,
  `https://${HOST}/accessibility`,
  `https://${HOST}/disclaimer`,
  `https://${HOST}/privacy`,
  `https://${HOST}/terms`,
  `https://${HOST}/site-map`,
  `https://${HOST}/llms.txt`,
  // 12 Service Pages
  `https://${HOST}/services/emergency-plumbing-elizabeth-nj`,
  `https://${HOST}/services/drain-cleaning-elizabeth-nj`,
  `https://${HOST}/services/water-heater-repair-elizabeth-nj`,
  `https://${HOST}/services/water-heater-installation-elizabeth-nj`,
  `https://${HOST}/services/leak-detection-elizabeth-nj`,
  `https://${HOST}/services/pipe-repair-elizabeth-nj`,
  `https://${HOST}/services/sewer-line-repair-elizabeth-nj`,
  `https://${HOST}/services/toilet-repair-elizabeth-nj`,
  `https://${HOST}/services/faucet-repair-elizabeth-nj`,
  `https://${HOST}/services/garbage-disposal-repair-elizabeth-nj`,
  `https://${HOST}/services/sump-pump-services-elizabeth-nj`,
  `https://${HOST}/services/clogged-drain-repair-elizabeth-nj`,
  // 5 Location Pages
  `https://${HOST}/locations/plumber-union-nj`,
  `https://${HOST}/locations/plumber-westfield-nj`,
  `https://${HOST}/locations/plumber-cranford-nj`,
  `https://${HOST}/locations/plumber-roselle-nj`,
  `https://${HOST}/locations/plumber-fanwood-nj`,
  // 4 Blog Articles
  `https://${HOST}/blog/signs-of-hidden-plumbing-leak`,
  `https://${HOST}/blog/what-to-do-when-pipe-bursts`,
  `https://${HOST}/blog/common-causes-slow-drains-prevention`,
  `https://${HOST}/blog/signs-water-heater-needs-repair`,
];

const payload = JSON.stringify({
  host: HOST,
  key: KEY,
  keyLocation: KEY_LOCATION,
  urlList: urlList,
});

console.log(`Submitting ${urlList.length} URLs to IndexNow (api.indexnow.org)...`);

const options = {
  hostname: "api.indexnow.org",
  port: 443,
  path: "/indexnow",
  method: "POST",
  headers: {
    "Content-Type": "application/json; charset=utf-8",
    "Content-Length": Buffer.byteLength(payload),
  },
};

const req = https.request(options, (res) => {
  console.log(`IndexNow Response Status: ${res.statusCode} ${res.statusMessage}`);

  let responseData = "";
  res.on("data", (chunk) => {
    responseData += chunk;
  });

  res.on("end", () => {
    if (res.statusCode === 200 || res.statusCode === 202) {
      console.log("Success! URLs successfully submitted to IndexNow for instant search engine discovery.");
    } else {
      console.log(`Submission Notice (Code ${res.statusCode}):`, responseData || "Standard acknowledgment received.");
    }
  });
});

req.on("error", (error) => {
  console.error("IndexNow Submission Error:", error.message);
});

req.write(payload);
req.end();

