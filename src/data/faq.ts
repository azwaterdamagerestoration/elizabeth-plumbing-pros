export interface CategorizedFAQ {
  id: string;
  category: string;
  categoryKey: string;
  question: string;
  answer: string;
  relatedLink?: {
    label: string;
    href: string;
  };
}

export const masterFAQList: CategorizedFAQ[] = [
  // General Plumbing
  {
    id: "gen-1",
    category: "General Plumbing",
    categoryKey: "general",
    question: "What are the most common early warning signs of plumbing trouble?",
    answer:
      "Subtle indicators include slow-draining sinks, gurgling sounds from toilet bowls when showers drain, faint water stains on ceilings or baseboards, sudden unexplained surges in water bills, and a decrease in household water pressure.",
    relatedLink: {
      label: "Read 7 Warning Signs of Hidden Plumbing Leaks",
      href: "/blog/signs-of-hidden-plumbing-leak",
    },
  },
  {
    id: "gen-2",
    category: "General Plumbing",
    categoryKey: "general",
    question: "How can I locate my main water shut-off valve?",
    answer:
      "In most Elizabeth and Union County homes, the main shut-off valve is located in the basement near the front wall where the municipal water line enters the property, or inside an access box near the water meter. Make sure every adult in your household knows how to turn it clockwise to stop pressurized water flow.",
  },
  {
    id: "gen-3",
    category: "General Plumbing",
    categoryKey: "general",
    question: "What questions should I ask a contractor before authorizing repairs?",
    answer:
      "Always verify: (1) Current New Jersey Master Plumber license; (2) General liability and workers' compensation coverage; (3) An itemized written estimate detailing labor and replacement parts; and (4) Available warranties on newly installed fixtures.",
  },

  // Emergency Plumbing
  {
    id: "emg-1",
    category: "Emergency Plumbing",
    categoryKey: "emergency",
    question: "What should I do immediately if a water pipe bursts?",
    answer:
      "1. Shut off the main water valve immediately. 2. Open lower faucets (such as in a basement sink) to drain remaining pressurized water. 3. Avoid standing water if electrical outlets or appliances are wet, and switch off circuit breakers from a dry area. 4. Call (908) 738-8526 to request urgent plumbing assistance.",
    relatedLink: {
      label: "View Emergency Pipe Repair Solutions",
      href: "/services/emergency-plumbing-elizabeth-nj",
    },
  },
  {
    id: "emg-2",
    category: "Emergency Plumbing",
    categoryKey: "emergency",
    question: "What should I do if raw sewage backs up into my basement floor drain?",
    answer:
      "Stop running all water in the house immediately, including washing machines and dishwashers. Do not flush any toilets. Keep children and pets away from contaminated wastewater, and call for emergency main sewer line clearing.",
    relatedLink: {
      label: "Learn About Sewer Line Repair Options",
      href: "/services/sewer-line-repair-elizabeth-nj",
    },
  },

  // Drain Cleaning
  {
    id: "drn-1",
    category: "Drain Cleaning",
    categoryKey: "drains",
    question: "Why do my kitchen and bathroom drains keep clogging repeatedly?",
    answer:
      "Kitchen sinks suffer from solidified fats, oils, and grease (FOG) coating horizontal pipe walls, while bathrooms accumulate hair, soap scum, and toothpaste binding. If clogs recur frequently across multiple fixtures, the blockage may be located in the main building drain or sewer lateral.",
    relatedLink: {
      label: "Explore Professional Drain Cleaning",
      href: "/services/drain-cleaning-elizabeth-nj",
    },
  },
  {
    id: "drn-2",
    category: "Drain Cleaning",
    categoryKey: "drains",
    question: "What is the difference between motorized snaking and hydro-jetting?",
    answer:
      "Motorized drain snakes use a rotating steel cable with cutting blades to bore through localized obstructions like hair and roots. Hydro-jetting uses high-pressure water streams (up to 4,000 PSI) to scrub pipe walls completely clean of grease and heavy mineral scaling.",
  },

  // Water Heaters
  {
    id: "wh-1",
    category: "Water Heaters",
    categoryKey: "heaters",
    question: "Why is my water heater making loud knocking or rumbling sounds?",
    answer:
      "Loud popping or rumbling indicates mineral sediment accumulation at the bottom of the tank. Trapped water underneath the sediment layer boils violently into steam pockets when the burner fires, creating audible noise and reducing heating efficiency.",
    relatedLink: {
      label: "Water Heater Repair Guidance",
      href: "/services/water-heater-repair-elizabeth-nj",
    },
  },
  {
    id: "wh-2",
    category: "Water Heaters",
    categoryKey: "heaters",
    question: "How long does a residential water heater typically last?",
    answer:
      "Standard tank water heaters typically provide reliable service for 8 to 12 years with routine annual maintenance and anode rod replacement. Tankless water heaters can last 15 to 20 years with periodic descaling.",
    relatedLink: {
      label: "Explore Water Heater Replacements",
      href: "/services/water-heater-installation-elizabeth-nj",
    },
  },

  // Service Requests
  {
    id: "srv-1",
    category: "Service Requests",
    categoryKey: "requests",
    question: "How does the Elizabeth Plumbing Pros service-connection work?",
    answer:
      "When you call (908) 738-8526, our team listens to your plumbing symptoms, confirms your town, and connects you directly with an available local independent plumbing contractor equipped to assess your job on-site.",
    relatedLink: {
      label: "Read About Our Step-by-Step Workflow",
      href: "/how-it-works",
    },
  },
  {
    id: "srv-2",
    category: "Service Requests",
    categoryKey: "requests",
    question: "Which communities in Union County are supported?",
    answer:
      "Our network coordinates coverage throughout Elizabeth (Elmora, Elizabethport, Bayway, Midtown) as well as the surrounding towns of Union Township, Westfield, Cranford, Roselle, and Fanwood.",
    relatedLink: {
      label: "View All Service Areas",
      href: "/service-areas",
    },
  },

  // Pricing & Estimates
  {
    id: "prc-1",
    category: "Pricing & Estimates",
    categoryKey: "pricing",
    question: "Why can't plumbing repairs be quoted with a flat price over the phone?",
    answer:
      "Every plumbing repair depends on pipe age, pipe material (copper, PEX, galvanized, PVC, cast iron), accessibility behind walls or beneath concrete slabs, and whether municipal building permits are required in Union County. Independent contractors evaluate the exact job on-site and provide an itemized written estimate.",
  },
  {
    id: "prc-2",
    category: "Pricing & Estimates",
    categoryKey: "pricing",
    question: "Does Elizabeth Plumbing Pros charge homeowners for telephone referrals?",
    answer:
      "No. Our telephone referral service is 100% free for homeowners and property managers. You only pay the independent contractor you decide to hire after approving their written estimate.",
  },
];

