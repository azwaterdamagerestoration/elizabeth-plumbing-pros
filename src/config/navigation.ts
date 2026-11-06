import { NavItem } from "@/types";

export interface ServiceCategoryGroup {
  name: string;
  badge: string;
  badgeColor: string;
  items: {
    label: string;
    href: string;
    iconName: string;
    tag?: string;
  }[];
}

export const serviceMegaMenuCategories: ServiceCategoryGroup[] = [
  {
    name: "Emergency & Piping",
    badge: "24/7 Dispatch",
    badgeColor: "bg-amber-500/15 text-amber-300 border-amber-500/30",
    items: [
      { label: "Emergency Plumbing", href: "/services/emergency-plumbing-elizabeth-nj", iconName: "AlertTriangle", tag: "24/7 Fast" },
      { label: "Leak Detection", href: "/services/leak-detection-elizabeth-nj", iconName: "Droplets" },
      { label: "Slab Leak Detection", href: "/services/slab-leak-detection-elizabeth-nj", iconName: "Search", tag: "Under-Slab" },
      { label: "Pipe Repair", href: "/services/pipe-repair-elizabeth-nj", iconName: "Wrench" },
      { label: "Whole-Home Copper Repiping", href: "/services/copper-repiping-elizabeth-nj", iconName: "Layers" },
    ],
  },
  {
    name: "Drains & Sewers",
    badge: "Hydro & Rooter",
    badgeColor: "bg-cyan-500/15 text-cyan-300 border-cyan-500/30",
    items: [
      { label: "Drain Cleaning", href: "/services/drain-cleaning-elizabeth-nj", iconName: "Wrench" },
      { label: "Clogged Drain Repair", href: "/services/clogged-drain-repair-elizabeth-nj", iconName: "Timer" },
      { label: "Hydro Jetting & Rooter", href: "/services/hydro-jetting-elizabeth-nj", iconName: "Gauge", tag: "4,000 PSI" },
      { label: "Sewer Line Repair", href: "/services/sewer-line-repair-elizabeth-nj", iconName: "ShieldAlert" },
      { label: "Trenchless Sewer Repair", href: "/services/trenchless-sewer-repair-elizabeth-nj", iconName: "ShieldCheck", tag: "No-Dig" },
    ],
  },
  {
    name: "Water Heaters & Gas",
    badge: "Tank & Tankless",
    badgeColor: "bg-orange-500/15 text-orange-300 border-orange-500/30",
    items: [
      { label: "Water Heater Repair", href: "/services/water-heater-repair-elizabeth-nj", iconName: "Flame" },
      { label: "Water Heater Installation", href: "/services/water-heater-installation-elizabeth-nj", iconName: "Flame", tag: "Replacement" },
      { label: "Water Softener Installation", href: "/services/water-softener-installation-elizabeth-nj", iconName: "Waves", tag: "Scale Free" },
      { label: "Gas Line Repair & Code", href: "/services/gas-line-repair-elizabeth-nj", iconName: "Flame", tag: "PSE&G Code" },
      { label: "Sump Pump Services", href: "/services/sump-pump-services-elizabeth-nj", iconName: "Waves" },
    ],
  },
  {
    name: "Fixtures & Commercial",
    badge: "Kitchen & Business",
    badgeColor: "bg-blue-500/15 text-blue-300 border-blue-500/30",
    items: [
      { label: "Toilet Repair", href: "/services/toilet-repair-elizabeth-nj", iconName: "Sparkles" },
      { label: "Faucet Repair", href: "/services/faucet-repair-elizabeth-nj", iconName: "Droplets" },
      { label: "Garbage Disposal Repair", href: "/services/garbage-disposal-repair-elizabeth-nj", iconName: "RefreshCw" },
      { label: "Kitchen & Bathroom Plumbing", href: "/services/kitchen-bathroom-plumbing-elizabeth-nj", iconName: "Sparkles", tag: "Remodel" },
      { label: "Commercial Plumber Services", href: "/services/commercial-plumbing-elizabeth-nj", iconName: "Settings", tag: "Commercial" },
      { label: "Backflow Testing & Prevention", href: "/services/backflow-testing-prevention-elizabeth-nj", iconName: "ShieldAlert", tag: "Certified" },
    ],
  },
];

export const mainNavigation: NavItem[] = [
  {
    label: "Services",
    href: "/services",
    children: [
      {
        label: "Emergency Plumbing",
        href: "/services/emergency-plumbing-elizabeth-nj",
        description: "Urgent assistance for burst pipes, flooding & critical leaks",
        iconName: "AlertTriangle",
      },
      {
        label: "Drain Cleaning",
        href: "/services/drain-cleaning-elizabeth-nj",
        description: "Clearing stubborn blockages in sinks, tubs & branch lines",
        iconName: "Wrench",
      },
      {
        label: "Water Heater Repair",
        href: "/services/water-heater-repair-elizabeth-nj",
        description: "Diagnosis for lukewarm water, rumbling tanks & burner faults",
        iconName: "Flame",
      },
      {
        label: "Water Heater Installation",
        href: "/services/water-heater-installation-elizabeth-nj",
        description: "Tank & tankless system replacements with professional sizing",
        iconName: "Flame",
      },
      {
        label: "Leak Detection",
        href: "/services/leak-detection-elizabeth-nj",
        description: "Pinpointing hidden pipe leaks behind walls, slabs & ceilings",
        iconName: "Droplets",
      },
      {
        label: "Pipe Repair",
        href: "/services/pipe-repair-elizabeth-nj",
        description: "Fixing burst, corroded copper, PVC & PEX residential piping",
        iconName: "Wrench",
      },
      {
        label: "Sewer Line Repair",
        href: "/services/sewer-line-repair-elizabeth-nj",
        description: "Camera scoping & solutions for tree roots and sewer backups",
        iconName: "ShieldAlert",
      },
      {
        label: "Toilet Repair",
        href: "/services/toilet-repair-elizabeth-nj",
        description: "Fixing constantly running toilets, leaks, flappers & fill valves",
        iconName: "Sparkles",
      },
      {
        label: "Faucet Repair",
        href: "/services/faucet-repair-elizabeth-nj",
        description: "Resolving dripping faucets, low aerator pressure & worn cartridges",
        iconName: "Droplets",
      },
      {
        label: "Garbage Disposal Repair",
        href: "/services/garbage-disposal-repair-elizabeth-nj",
        description: "Unjamming humming units, fixing under-sink leaks & replacements",
        iconName: "RefreshCw",
      },
      {
        label: "Sump Pump Services",
        href: "/services/sump-pump-services-elizabeth-nj",
        description: "Basement flood prevention, float switches & battery backups",
        iconName: "Waves",
      },
      {
        label: "Clogged Drain Repair",
        href: "/services/clogged-drain-repair-elizabeth-nj",
        description: "Fast mechanical clearing for localized kitchen & bathroom clogs",
        iconName: "Timer",
      },
      {
        label: "Water Softener Installation",
        href: "/services/water-softener-installation-elizabeth-nj",
        description: "Whole-home ion-exchange & conditioning systems to prevent mineral scale",
        iconName: "Waves",
      },
      {
        label: "Gas Line Repair & Code",
        href: "/services/gas-line-repair-elizabeth-nj",
        description: "Certified gas leak detection, red-tag clearance & NJ UCC code compliance",
        iconName: "Flame",
      },
      {
        label: "Slab Leak Detection",
        href: "/services/slab-leak-detection-elizabeth-nj",
        description: "Non-invasive acoustic & thermal imaging for under-foundation pipe leaks",
        iconName: "Search",
      },
      {
        label: "Whole-Home Copper Repiping",
        href: "/services/copper-repiping-elizabeth-nj",
        description: "Replacing failing galvanized & leaky pipes with durable Type L copper & PEX",
        iconName: "Layers",
      },
      {
        label: "Hydro Jetting & Rooter",
        href: "/services/hydro-jetting-elizabeth-nj",
        description: "4,000 PSI high-velocity scouring to clear roots, heavy grease & sludge",
        iconName: "Gauge",
      },
      {
        label: "Trenchless Sewer Repair",
        href: "/services/trenchless-sewer-repair-elizabeth-nj",
        description: "No-dig CIPP epoxy relining & bursting to preserve lawns & driveways",
        iconName: "ShieldCheck",
      },
      {
        label: "Kitchen & Bathroom Plumbing",
        href: "/services/kitchen-bathroom-plumbing-elizabeth-nj",
        description: "Complete fixture installations, rough-ins, vanities & luxury shower valves",
        iconName: "Sparkles",
      },
      {
        label: "Commercial Plumber Services",
        href: "/services/commercial-plumbing-elizabeth-nj",
        description: "Plumbing for restaurants, retail, grease interceptors & commercial boilers",
        iconName: "Settings",
      },
      {
        label: "Backflow Testing & Prevention",
        href: "/services/backflow-testing-prevention-elizabeth-nj",
        description: "Annual certified RPZ assembly testing, rebuilds & NJDEP compliance filings",
        iconName: "ShieldAlert",
      },
    ],
  },
  {
    label: "Service Areas",
    href: "/service-areas",
    children: [
      {
        label: "Elizabeth, NJ",
        href: "/",
        description: "Primary city coverage across Elizabethport, Elmora, Midtown & Bayway",
        iconName: "MapPin",
      },
      {
        label: "Union, NJ",
        href: "/locations/plumber-union-nj",
        description: "Residential plumbing support throughout Union Township",
        iconName: "MapPin",
      },
      {
        label: "Westfield, NJ",
        href: "/locations/plumber-westfield-nj",
        description: "Plumbing assistance for historic homes and suburban estates",
        iconName: "MapPin",
      },
      {
        label: "Cranford, NJ",
        href: "/locations/plumber-cranford-nj",
        description: "Help with drain, fixture, and sewer concerns in Cranford township",
        iconName: "MapPin",
      },
      {
        label: "Roselle, NJ",
        href: "/locations/plumber-roselle-nj",
        description: "Local plumbing connections for Roselle borough properties",
        iconName: "MapPin",
      },
      {
        label: "Fanwood, NJ",
        href: "/locations/plumber-fanwood-nj",
        description: "Plumbing repair and maintenance assistance across Fanwood borough",
        iconName: "MapPin",
      },
    ],
  },
  {
    label: "How It Works",
    href: "/how-it-works",
  },
  {
    label: "Resources",
    href: "/resources",
  },
  {
    label: "Blog",
    href: "/blog",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export const footerNavigation = {
  services: [
    { label: "Emergency Plumbing", href: "/services/emergency-plumbing-elizabeth-nj" },
    { label: "Drain Cleaning", href: "/services/drain-cleaning-elizabeth-nj" },
    { label: "Water Heater Repair", href: "/services/water-heater-repair-elizabeth-nj" },
    { label: "Water Heater Installation", href: "/services/water-heater-installation-elizabeth-nj" },
    { label: "Leak Detection", href: "/services/leak-detection-elizabeth-nj" },
    { label: "Pipe Repair", href: "/services/pipe-repair-elizabeth-nj" },
    { label: "Sewer Line Repair", href: "/services/sewer-line-repair-elizabeth-nj" },
    { label: "Toilet Repair", href: "/services/toilet-repair-elizabeth-nj" },
    { label: "Faucet Repair", href: "/services/faucet-repair-elizabeth-nj" },
    { label: "Garbage Disposal Repair", href: "/services/garbage-disposal-repair-elizabeth-nj" },
    { label: "Sump Pump Services", href: "/services/sump-pump-services-elizabeth-nj" },
    { label: "Clogged Drain Repair", href: "/services/clogged-drain-repair-elizabeth-nj" },
    { label: "Water Softener Installation", href: "/services/water-softener-installation-elizabeth-nj" },
    { label: "Gas Line Repair & Code", href: "/services/gas-line-repair-elizabeth-nj" },
    { label: "Slab Leak Detection", href: "/services/slab-leak-detection-elizabeth-nj" },
    { label: "Whole-Home Copper Repiping", href: "/services/copper-repiping-elizabeth-nj" },
    { label: "Hydro Jetting & Rooter", href: "/services/hydro-jetting-elizabeth-nj" },
    { label: "Trenchless Sewer Repair", href: "/services/trenchless-sewer-repair-elizabeth-nj" },
    { label: "Kitchen & Bathroom Plumbing", href: "/services/kitchen-bathroom-plumbing-elizabeth-nj" },
    { label: "Commercial Plumber Services", href: "/services/commercial-plumbing-elizabeth-nj" },
    { label: "Backflow Testing & Prevention", href: "/services/backflow-testing-prevention-elizabeth-nj" },
  ],
  serviceAreas: [
    { label: "Elizabeth, NJ", href: "/" },
    { label: "Union, NJ", href: "/locations/plumber-union-nj" },
    { label: "Westfield, NJ", href: "/locations/plumber-westfield-nj" },
    { label: "Cranford, NJ", href: "/locations/plumber-cranford-nj" },
    { label: "Roselle, NJ", href: "/locations/plumber-roselle-nj" },
    { label: "Fanwood, NJ", href: "/locations/plumber-fanwood-nj" },
  ],
  company: [
    { label: "About Elizabeth Plumbing Pros", href: "/about" },
    { label: "How It Works", href: "/how-it-works" },
    { label: "Homeowner Resources", href: "/resources" },
    { label: "Frequently Asked Questions", href: "/faq" },
    { label: "Plumbing Guides & Blog", href: "/blog" },
    { label: "Contact & Phone Support", href: "/contact" },
  ],
  legal: [
    { label: "Editorial Policy", href: "/editorial-policy" },
    { label: "Accessibility Statement", href: "/accessibility" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Use", href: "/terms" },
    { label: "Service Disclaimer", href: "/disclaimer" },
    { label: "HTML Site Map", href: "/site-map" },
  ],
};
