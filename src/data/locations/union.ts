import { LocationPageData } from "@/types/location";
import { siteConfig } from "@/config/site";

export const unionLocationData: LocationPageData = {
  id: "union",
  slug: "plumber-union-nj",
  cityName: "Union",
  state: "New Jersey",
  stateAbbreviation: "NJ",
  county: "Union County",
  postalCodes: ["07083"],
  primaryKeyword: "Plumber Union NJ",
  secondaryKeywords: [
    "Plumbing services Union NJ",
    "Plumbing repair Union NJ",
    "Emergency plumber Union NJ",
    "Drain cleaning Union NJ",
    "Water heater repair Union NJ",
  ],
  metaTitle: "Plumber in Union, NJ | Elizabeth Plumbing Pros",
  metaDescription:
    "Need plumbing help in Union, NJ? Explore assistance for pipe leaks, drain clogs, water heaters, and sump pumps. Call (908) 738-8526.",
  canonicalUrl: `${siteConfig.url}/locations/plumber-union-nj`,
  h1: "Plumbing Services in Union, NJ",
  heroEyebrow: "PLUMBING SERVICES • UNION, NJ",
  heroDescription:
    "Facing a plumbing issue in Union Township? Explore dependable assistance for leaking pipes, clogged drains, water heater repairs, and residential plumbing maintenance.",
  heroImage: "/images/locations/union-hero.webp",
  heroImageAlt: "Modern residential basement plumbing, PEX water lines and shutoff valves in a Union NJ home",
  heroBadges: [
    { label: "Union Township Focus", iconName: "MapPin" },
    { label: "Drain & Sewer Clearing", iconName: "Droplets" },
    { label: "Water Heater Repairs", iconName: "Flame" },
    { label: "Sump Pump & Basement Help", iconName: "Wrench" },
  ],
  quickHighlights: [
    {
      title: "Union Township Plumbing Information",
      description:
        "Support tailored for single-family homes, split-levels, and ranches across Union neighborhoods.",
      iconName: "MapPin",
    },
    {
      title: "Drain & Sewer Services",
      description:
        "Motorized snaking, camera inspections, and solutions for main lateral backups and stubborn sink clogs.",
      iconName: "ShieldAlert",
    },
    {
      title: "Water Heater Services",
      description:
        "Diagnosis and replacement support for gas, electric, and tankless water heaters in Union basements.",
      iconName: "Flame",
    },
    {
      title: "Plumbing Repair Assistance",
      description:
        "Connecting you with local pros for copper pipe leaks, main shutoff valves, and fixture rebuilds.",
      iconName: "Wrench",
    },
  ],
  cityIntroduction: {
    heading: "Plumbing Services for Homes in Union, NJ",
    paragraphs: [
      "Union Township is one of Union County's most established suburban communities, known for its pleasant neighborhoods, bustling retail corridors along Morris Avenue and Route 22, and quick proximity to major transit routes. The township's housing inventory predominantly features mid-century split-levels, Cape Cods, ranch homes, and post-war colonials constructed between the 1940s and 1970s. These homes offer spacious layouts, but their original plumbing systems often reach a pivotal age where routine maintenance and component upgrades become essential.",
      "In residential pockets such as Connecticut Farms, Battle Hill, and Putnam Ridge, homeowners frequently contend with galvanized water lines that have accumulated internal mineral constriction over decades, resulting in diminished water pressure at upstairs showers. Furthermore, basements in Union Township are frequently finished or utilized for storage and laundry, making sump pump reliability and backwater prevention critical considerations during heavy seasonal rainfall.",
      "Winter cold snaps also test residential plumbing in Union. Outdoor sillcocks, uninsulated pipe runs along exterior foundation walls, and drafty garage walls can freeze quickly without proper seasonal preparation. By understanding the typical piping materials and architectural characteristics of Union homes, property owners can identify warning signs early and coordinate with independent local plumbing professionals to preserve their properties.",
    ],
    image: "/images/locations/union-residential.webp",
    imageAlt: "Plumbing repair and pipe fitting work in a Union NJ residential basement utility room",
    calloutTitle: "Mid-Century Plumbing Modernization",
    calloutText:
      "Replacing aging galvanized supply lines and old gate valves with modern quarter-turn ball valves dramatically improves home safety and water pressure.",
  },
  localContext: {
    housingCharacteristics:
      "Union Township is widely recognized for mid-century single-family dwellings, including split-levels, Cape Cods, and ranch homes with full basements.",
    pipingSystems:
      "A mixture of legacy copper, vintage galvanized iron in older sections, cast-iron drain stacks, and newer PEX or PVC lines in remodeled kitchens and baths.",
    seasonalFactors:
      "Heavy spring rains necessitate dependable basement sump pumps, while sub-freezing January temperatures create freeze vulnerabilities in perimeter pipe runs.",
  },
  supportedServices: [
    {
      slug: "emergency-plumbing-elizabeth-nj",
      title: "Emergency Plumbing",
      description:
        "Urgent support for burst water pipes, severe indoor leaks, and overflowing sewage in Union Township residences.",
      iconName: "AlertTriangle",
      image: "/images/services/emergency-pipe-repair.webp",
      features: ["Active leak triage", "Water shutoff support", "Rapid phone response"],
    },
    {
      slug: "drain-cleaning-elizabeth-nj",
      title: "Drain Cleaning",
      description:
        "Motorized mechanical clearing for slow-draining tubs, blocked kitchen waste lines, and clogged floor drains.",
      iconName: "Wrench",
      image: "/images/services/professional-drain-cleaning.webp",
      features: ["Main line snaking", "Branch line clearing", "Debris & hair extraction"],
    },
    {
      slug: "water-heater-repair-elizabeth-nj",
      title: "Water Heater Repair",
      description:
        "Diagnosing heating element failures, burner malfunctions, leaking tank fittings, and pilot light problems.",
      iconName: "Flame",
      image: "/images/services/water-heater-repair.webp",
      features: ["Thermostat testing", "Gas control valve checks", "Flushing sediment"],
    },
    {
      slug: "water-heater-installation-elizabeth-nj",
      title: "Water Heater Installation",
      description:
        "Upgrading aging, inefficient water heaters with properly sized standard storage or tankless systems.",
      iconName: "Flame",
      image: "/images/services/water-heater-installation.webp",
      features: ["Proper BTU & gallon sizing", "Venting inspection", "Expansion tank setup"],
    },
    {
      slug: "sump-pump-services-elizabeth-nj",
      title: "Sump Pump Services",
      description:
        "Basement flood protection, primary sump pump evaluations, check valve replacements, and battery backup systems.",
      iconName: "Waves",
      image: "/images/services/sump-pump-services.webp",
      features: ["Float switch testing", "Check valve installation", "Battery backup inspection"],
    },
    {
      slug: "leak-detection-elizabeth-nj",
      title: "Leak Detection",
      description:
        "Acoustic and electronic pinpointing of concealed pipe leaks behind basement paneling, drywall, and ceilings.",
      iconName: "Droplets",
      image: "/images/services/residential-leak-detection.webp",
      features: ["Non-invasive detection", "Meter test evaluation", "Pressure drop tests"],
    },
    {
      slug: "pipe-repair-elizabeth-nj",
      title: "Pipe Repair",
      description:
        "Repairing corroded copper lines, cracked drains, and failing main water shutoff valves throughout Union homes.",
      iconName: "Wrench",
      image: "/images/services/pipe-repair.webp",
      features: ["Copper soldering", "PEX line installation", "Main valve replacement"],
    },
    {
      slug: "sewer-line-repair-elizabeth-nj",
      title: "Sewer Line Repair",
      description:
        "Camera evaluations and repairs for cracked underground laterals, bellied sewer pipes, and root infiltration.",
      iconName: "ShieldAlert",
      image: "/images/services/sewer-line-repair.webp",
      features: ["Video camera scope", "Root removal", "Pipe section replacement"],
    },
  ],
  urgentPlumbing: {
    heading: "Facing an Urgent Plumbing Problem in Union?",
    description:
      "Water damage can quickly ruin finished basements, drywall, and hardwood floors in Union homes. If you are experiencing a ruptured pipe, a flooded basement, or a major sewer backup, contact Elizabeth Plumbing Pros immediately to coordinate professional assistance.",
    checklist: [
      "Burst or split copper or PEX water pipes",
      "Sump pump failure during intense storm rainfall",
      "Sewage backing up through basement floor drains or laundry sinks",
      "Water heater base actively leaking standing water",
      "Significant indoor water flow behind finished walls",
    ],
    safetyTip: {
      title: "Immediate Action Recommendation:",
      text: "Locate and close your main water shutoff valve near the water meter in your basement or utility room. If standing water is near electrical outlets or your electrical panel, stay out of the water and contact your electric utility or emergency services.",
    },
    image: "/images/home/emergency-pipe-repair.webp",
    imageAlt: "Emergency pipe leak repair in a Union NJ residential home",
  },
  commonPlumbingProblems: [
    {
      id: "union-prob-1",
      title: "Basement Sump Pump Failures During Heavy Rainfall",
      symptoms:
        "Water accumulating around basement perimeter drains, sump pump motor humming but failing to discharge water, or pump failing to activate.",
      possibleCauses:
        "Stuck float switch, debris clogging the pump impeller, failed check valve causing back-cycling, or loss of municipal power without battery backup.",
      whyItMatters:
        "A failed sump pump can allow inches of water into finished basement spaces, destroying flooring, drywall, and stored belongings.",
      whenToCall:
        "When water rises in the sump pit and the pump does not evacuate it, or the pump runs non-stop without water moving.",
      recommendedServiceSlug: "sump-pump-services-elizabeth-nj",
      recommendedServiceTitle: "Explore Sump Pump Solutions",
      iconName: "Waves",
    },
    {
      id: "union-prob-2",
      title: "Aging Water Heaters Leaking from Bottom Seams",
      symptoms:
        "Puddles forming beneath the water heater jacket, rusty brown streaks on the tank exterior, or hot water smelling metallic.",
      possibleCauses:
        "Internal glass lining failure after years of mineral sediment buildup and anode rod depletion, leading to tank shell corrosion.",
      whyItMatters:
        "Tank shell corrosion cannot be patched; an unaddressed leaking tank will eventually rupture and flood the basement.",
      whenToCall:
        "As soon as moisture or rust is observed around the base of the tank or relief discharge tube.",
      recommendedServiceSlug: "water-heater-repair-elizabeth-nj",
      recommendedServiceTitle: "Water Heater Repair & Replacement",
      iconName: "Flame",
    },
    {
      id: "union-prob-3",
      title: "Low Water Pressure from Aging Galvanized Pipes",
      symptoms:
        "Water flow drastically drops when a second fixture is turned on, or upstairs shower pressure is weak and uneven.",
      possibleCauses:
        "Mineral scale and rust buildup inside original mid-century galvanized iron distribution piping.",
      whyItMatters:
        "Corrosion restricts water delivery and eventually causes pinholes or severe joint leaks.",
      whenToCall:
        "When whole-house pressure drops or multiple fixtures deliver a weak trickle simultaneously.",
      recommendedServiceSlug: "pipe-repair-elizabeth-nj",
      recommendedServiceTitle: "Learn About Pipe Upgrades",
      iconName: "Wrench",
    },
    {
      id: "union-prob-4",
      title: "Main Sewer Line Root Infiltration & Backups",
      symptoms:
        "Basement floor drain bubbling when washing machine empties, gurgling toilets, or sewage odors in the lower level.",
      possibleCauses:
        "Tree roots entering joints in the exterior clay or cast-iron sewer lateral connecting the home to the street main.",
      whyItMatters:
        "Blockages can cause complete wastewater backups into your living areas, creating biological health hazards.",
      whenToCall:
        "At the first sign of multiple fixtures draining sluggishly or bubbling lower-level drains.",
      recommendedServiceSlug: "sewer-line-repair-elizabeth-nj",
      recommendedServiceTitle: "Sewer Line Inspection & Repair",
      iconName: "ShieldAlert",
    },
    {
      id: "union-prob-5",
      title: "Kitchen Sink Clogs & Grease Stoppages",
      symptoms:
        "Kitchen sink water clears very slowly, gurgles in adjacent pipes, or foul food odors rise from the drain.",
      possibleCauses:
        "Solidified cooking oils, food particles, and soap scum adhering to the horizontal waste line beneath the kitchen floor.",
      whyItMatters:
        "Repeated chemical drain cleaners can soften older plastic or corrode cast-iron kitchen stacks.",
      whenToCall:
        "When mechanical plunging fails to clear the water and sink remains standing full.",
      recommendedServiceSlug: "drain-cleaning-elizabeth-nj",
      recommendedServiceTitle: "Professional Drain Snaking",
      iconName: "Wrench",
    },
    {
      id: "union-prob-6",
      title: "Frozen Water Pipes Along Exterior Foundation Walls",
      symptoms:
        "No water flowing from basement laundry sink or outdoor spigots during freezing mornings, or frosted copper lines.",
      possibleCauses:
        "Cold air drafts penetrating basement rim joists or crawlspaces exposing uninsulated copper pipes.",
      whyItMatters:
        "Water expands as it freezes, splitting copper seams and triggering major flooding when the temperature rises.",
      whenToCall:
        "Immediately if a pipe is frozen or weeping water upon thawing.",
      recommendedServiceSlug: "emergency-plumbing-elizabeth-nj",
      recommendedServiceTitle: "Emergency Freeze Response",
      iconName: "AlertTriangle",
    },
    {
      id: "union-prob-7",
      title: "Running Toilet Valves Wasting Water",
      symptoms:
        "Water running continuously in the toilet tank, loud hissing noises, or handle requiring jiggling after flushing.",
      possibleCauses:
        "Degraded flapper seal, cracked overflow tube, or calcium-encrusted fill valve float mechanism.",
      whyItMatters:
        "A leaking toilet can waste hundreds of gallons of water per day, resulting in elevated municipal water bills.",
      whenToCall:
        "If replacing a basic flapper fails to stop the water flow or fill valve does not shut off.",
      recommendedServiceSlug: "toilet-repair-elizabeth-nj",
      recommendedServiceTitle: "Toilet Rebuild & Repair",
      iconName: "Sparkles",
    },
    {
      id: "union-prob-8",
      title: "Stuck or Corroded Main Water Shutoff Valves",
      symptoms:
        "Old gate valve wheel will not turn, leaks around the packing nut when turned, or fails to shut off water completely.",
      possibleCauses:
        "Mineral deposits and corrosion binding the brass gate valve stem after decades without being exercised.",
      whyItMatters:
        "In an emergency pipe burst, an inoperable main shutoff prevents you from stopping water damage quickly.",
      whenToCall:
        "Before an emergency occurs, to upgrade to a dependable modern quarter-turn ball valve.",
      recommendedServiceSlug: "pipe-repair-elizabeth-nj",
      recommendedServiceTitle: "Main Shutoff Valve Replacement",
      iconName: "Droplets",
    },
  ],
  serviceProcess: [
    {
      number: "01",
      title: "Call and Describe Your Plumbing Problem",
      description:
        "Call (908) 738-8526 and tell our dispatch agent about the plumbing symptoms you are encountering in your Union Township home.",
    },
    {
      number: "02",
      title: "Discuss Your Location & Needs",
      description:
        "Share your specific Union neighborhood, the affected fixtures or piping, and whether your situation is urgent or routine.",
    },
    {
      number: "03",
      title: "Review Available Next Steps",
      description:
        "Connect with an independent local plumbing technician who can inspect the issue on-site and present upfront repair recommendations.",
    },
  ],
  serviceBenefits: {
    heading: "Why Union Residents Contact Elizabeth Plumbing Pros",
    subtitle:
      "A trusted local platform connecting Union Township homeowners with experienced independent plumbing professionals.",
    featured: {
      badge: "Township-Wide Focus",
      title: "Understanding Union Township Home Plumbing",
      description:
        "From Connecticut Farms to Battle Hill and Putnam Ridge, homes in Union feature unique mid-century construction nuances that require thoughtful plumbing diagnostic care.",
      points: [
        "Experience with split-level drainage stacks and basement sump systems",
        "Direct phone coordination without impersonal automated systems",
        "Assistance for urgent pipe emergencies and scheduled maintenance",
      ],
    },
    items: [
      {
        title: "Multiple Service Categories",
        description:
          "Help with water heaters, sump pumps, pipe repairs, drain clearing, and leak detection.",
        iconName: "Wrench",
      },
      {
        title: "Direct Phone Communication",
        description:
          "Connect directly by phone with a representative ready to help evaluate your plumbing request.",
        iconName: "PhoneCall",
      },
      {
        title: "Helpful Educational Content",
        description:
          "Detailed symptom guides so you can understand what is happening before authorizing work.",
        iconName: "BookOpen",
      },
      {
        title: "Union County Coverage",
        description:
          "Fast connections across Union Township and neighboring towns like Westfield, Cranford, and Roselle.",
        iconName: "Globe2",
      },
    ],
  },
  neighborhoods: {
    heading: "Plumbing Service Information for Union Township Neighborhoods",
    description:
      "Union Township spans diverse residential sections with distinct plumbing considerations. Our connection service helps property owners across all verified areas of Union.",
    areas: [
      {
        name: "Connecticut Farms & Morris Avenue Core",
        description:
          "Historic residential core surrounding the landmark church and Morris Avenue, featuring established colonials with mature plumbing systems.",
      },
      {
        name: "Battle Hill Neighborhood",
        description:
          "Quiet residential area composed largely of mid-century single-family split-levels and ranches with full basements requiring sump pump attention.",
      },
      {
        name: "Putnam Ridge & Overlook Area",
        description:
          "Rolling terrain residential pocket with spacious single-family homes, often requiring water pressure regulation and water heater tune-ups.",
      },
      {
        name: "Vauxhall & Stuyvesant Avenue Corridor",
        description:
          "Dense residential enclave near the Essex County border featuring single and multi-family homes requiring drain snaking and fixture updates.",
      },
      {
        name: "Route 22 & Town Center Environs",
        description:
          "Mixed commercial and residential pockets where plumbing requests frequently involve rapid drain clears and valve replacements.",
      },
    ],
    geographicNotes:
      "Union Township is bordered by Elizabeth to the southeast, Hillside to the east, Springfield and Millburn to the northwest, and Cranford and Roselle Park to the south. Key arterial roads include Morris Avenue (Route 82), Route 22, the Garden State Parkway, and Chestnut Street.",
  },
  costFactors: {
    heading: "What Affects Plumbing Service Costs in Union, NJ?",
    intro:
      "Plumbing repair costs are influenced by the complexity of the repair, necessary materials, and physical accessibility. Independent contractors determine final costs after an on-site physical inspection.",
    factors: [
      {
        title: "Nature and Urgency of the Repair",
        description:
          "Clearing a localized toilet stoppage requires basic equipment, while addressing an active basement flood or replacing a failed main sewer lateral involves advanced tools and extended labor.",
      },
      {
        title: "Accessibility of Plumbing Lines",
        description:
          "Pipes located in open basement utility spaces are faster and less costly to access than lines buried beneath concrete slabs or concealed in tiled walls.",
      },
      {
        title: "Material Quality and Component Types",
        description:
          "Choosing high-efficiency commercial-grade water heaters, cast-iron vs. PVC drainage lines, or specialized brass valves impacts material expenses.",
      },
      {
        title: "Permitting and Code Requirements",
        description:
          "Major installations like water heaters and sewer line replacements require municipal permits from the Union Township building department to ensure compliance with New Jersey codes.",
      },
    ],
    infoPanel: {
      title: "Upfront Estimate Recommendations",
      bullets: [
        "Request a written diagnostic estimate before any work starts",
        "Confirm whether replacement parts and labor are both included",
        "Inquire if municipal permits are needed for your specific repair",
        "Verify contractor licensing and insurance prior to service",
      ],
      disclaimer:
        "Elizabeth Plumbing Pros is an independent connection service. All prices and warranties are determined directly by the independent plumbing contractor performing the service.",
    },
  },
  homeownerTips: {
    heading: "Helpful Plumbing Tips for Union Township Homeowners",
    intro:
      "Keep your plumbing systems functioning efficiently with these practical maintenance recommendations.",
    tips: [
      {
        title: "Test Your Sump Pump Before Heavy Storms",
        description:
          "Pour a bucket of water into the sump pit every spring to verify that the float switch activates properly and the pump discharges water outdoors.",
        iconName: "Waves",
      },
      {
        title: "Exercise Your Main Water Shutoff Valve",
        description:
          "Turn your main water shutoff valve partially off and on twice a year to prevent mineral deposits from seizing the valve mechanism.",
        iconName: "ShieldAlert",
      },
      {
        title: "Insulate Cold Basement Rim Joists",
        description:
          "Add foam insulation along basement rim joists where copper water supply lines run close to exterior foundation walls to prevent winter freezes.",
        iconName: "Flame",
      },
      {
        title: "Avoid Chemical Drain Cleaners in Older Pipes",
        description:
          "Harsh chemical cleaners generate heat that can soften plastic pipes or corrode older metal traps; prefer mechanical snaking for stubborn clogs.",
        iconName: "Wrench",
      },
    ],
  },
  faqs: [
    {
      id: "union-faq-1",
      question: "How do I connect with a local plumber in Union, NJ?",
      answer:
        "Call Elizabeth Plumbing Pros at (908) 738-8526. Speak with an agent about your plumbing problem, address in Union Township, and timeline. We will connect you directly with an available independent plumbing contractor serving Union.",
    },
    {
      id: "union-faq-2",
      question: "What should I do if my basement sump pump fails during a storm?",
      answer:
        "First, check if the pump's power cord is plugged in and the circuit breaker hasn't tripped. Gently lift the float switch to see if the motor turns on. If the pump is hummed or dead while water rises, call (908) 738-8526 immediately for emergency plumbing coordination.",
    },
    {
      id: "union-faq-3",
      question: "Can I get help with an older water heater in Union?",
      answer:
        "Yes. Whether your water heater is producing lukewarm water, making popping noises, or leaking from the bottom seams, you can call to discuss diagnostic repairs or replacement options with an independent specialist.",
    },
    {
      id: "union-faq-4",
      question: "Why is water pressure low throughout my Union home?",
      answer:
        "Low water pressure across multiple fixtures is frequently caused by mineral scaling inside older galvanized iron supply pipes, a failing Pressure Reducing Valve (PRV), or a partially closed main shutoff valve.",
    },
    {
      id: "union-faq-5",
      question: "Are estimates provided before plumbing repairs begin?",
      answer:
        "Yes. Independent contractors dispatched through our network inspect the issue on-site and present upfront estimates detailing the required labor and parts before beginning repairs.",
    },
    {
      id: "union-faq-6",
      question: "Do you serve all neighborhoods in Union Township?",
      answer:
        "Yes. Coverage extends across Union Township, including Connecticut Farms, Battle Hill, Putnam Ridge, Vauxhall, and surrounding corridors.",
    },
    {
      id: "union-faq-7",
      question: "How do I know if my sewer line has tree root intrusion?",
      answer:
        "Classic symptoms include multiple branch drains backing up simultaneously, sewage odors in the basement, or gurgling sounds in lower-level toilets when appliances drain.",
    },
    {
      id: "union-faq-8",
      question: "What should I ask a contractor before work starts?",
      answer:
        "Verify their New Jersey plumbing license and insurance, request a written breakdown of labor and materials, and ask about permit requirements for major installations like water heaters.",
    },
  ],
  relatedServices: [
    "emergency-plumbing-elizabeth-nj",
    "drain-cleaning-elizabeth-nj",
    "water-heater-repair-elizabeth-nj",
    "sump-pump-services-elizabeth-nj",
  ],
  nearbyCities: [
    {
      name: "Westfield, NJ",
      slug: "plumber-westfield-nj",
      distanceOrDirection: "Southwest (Approx. 6 miles)",
      description:
        "Historic residential community with Victorian estates and specialized plumbing restoration needs.",
    },
    {
      name: "Cranford, NJ",
      slug: "plumber-cranford-nj",
      distanceOrDirection: "South (Approx. 4 miles)",
      description:
        "Picturesque riverfront community requiring vigilant sump pump and drainage management.",
    },
    {
      name: "Roselle, NJ",
      slug: "plumber-roselle-nj",
      distanceOrDirection: "Southeast (Approx. 4 miles)",
      description:
        "Residential enclave bordering Warinanco Park with classic bungalows and colonials.",
    },
    {
      name: "Fanwood, NJ",
      slug: "plumber-fanwood-nj",
      distanceOrDirection: "Southwest (Approx. 7 miles)",
      description:
        "Compact suburban borough with tight-knit residential neighborhoods.",
    },
    {
      name: "Elizabeth, NJ",
      slug: "",
      isHome: true,
      distanceOrDirection: "Southeast (Approx. 4 miles)",
      description:
        "Primary city hub connecting residents with comprehensive plumbing services across Union County.",
    },
  ],
  relatedArticles: [
    "what-to-do-when-a-pipe-bursts-elizabeth-nj",
    "signs-of-a-hidden-plumbing-leak-elizabeth-nj",
    "how-to-prevent-common-drain-clogs-elizabeth-nj",
  ],
  finalCTA: {
    heading: "Need Plumbing Help in Union, NJ?",
    description:
      "Call Elizabeth Plumbing Pros at (908) 738-8526 to discuss your plumbing problem and connect with an independent local professional in Union Township.",
  },
};

