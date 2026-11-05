import { LocationItem } from "@/types";

export * from "./locations/index";

export const locationsData: LocationItem[] = [
  {
    id: "elizabeth",
    name: "Elizabeth, NJ",
    slug: "elizabeth",
    county: "Union County",
    state: "New Jersey",
    postalCodes: ["07201", "07202", "07206", "07207", "07208"],
    description:
      "As Union County's historic seat and largest metropolis, Elizabeth features a dense mix of vintage multi-family row homes, classic colonials in Elmora, waterfront properties along Elizabethport, and commercial corridors along Broad Street. Local plumbing needs frequently involve vintage cast-iron drainage lines, galvanized supply upgrades, and high-demand multi-unit fixtures.",
    neighborhoodHighlights: [
      "Elmora & Elmora Hills",
      "Elizabethport (Historic Port)",
      "Midtown Historic District",
      "Bayway & Westminster",
    ],
    commonNeeds: [
      "Multi-family drain clearing and stack maintenance",
      "Older home pipe retrofitting and valve replacement",
      "Water heater maintenance for high-occupancy buildings",
      "Urgent emergency plumbing coordination",
    ],
  },
  {
    id: "union",
    name: "Union, NJ",
    slug: "union",
    county: "Union County",
    state: "New Jersey",
    postalCodes: ["07083"],
    description:
      "Located just northwest of Elizabeth, Union Township is a vibrant suburban enclave characterized by mid-century single-family homes, established split-levels, and bustling commerce along Morris Avenue and Route 22. Common homeowner plumbing inquiries include aging boiler and water heater replacements, sump pump installations for flood-prone basements, and kitchen remodels.",
    neighborhoodHighlights: [
      "Connecticut Farms",
      "Putnam Ridge",
      "Battle Hill",
      "Town Center / Morris Ave",
    ],
    commonNeeds: [
      "Basement sump pump and drainage repair",
      "Residential water heater service and upgrades",
      "Main water service shut-off valve replacements",
      "Sewer root intrusion and motorized drain snaking",
    ],
  },
  {
    id: "westfield",
    name: "Westfield, NJ",
    slug: "westfield",
    county: "Union County",
    state: "New Jersey",
    postalCodes: ["07090", "07091"],
    description:
      "Renowned for its tree-lined streets, historic downtown district, and stately Victorian, Tudor, and Colonial revival estates, Westfield requires delicate and specialized plumbing care. Preserving historic architectural integrity while modernizing copper piping, sewer laterals, and high-efficiency radiant heating systems is a top priority for local residents.",
    neighborhoodHighlights: [
      "The Gardens",
      "Wychwood Historic Neighborhood",
      "Brightwood Park Environs",
      "Downtown Westfield Historic District",
    ],
    commonNeeds: [
      "Historic home plumbing restoration and fixture updates",
      "Underground sewer lateral camera scopes",
      "High-efficiency water heaters and boiler service",
      "Water pressure regulation and copper line repairs",
    ],
  },
  {
    id: "cranford",
    name: "Cranford, NJ",
    slug: "cranford",
    county: "Union County",
    state: "New Jersey",
    postalCodes: ["07016"],
    description:
      "Known as the 'Venice of New Jersey' because the meandering Rahway River winds through its downtown and residential neighborhoods, Cranford homeowners place exceptional importance on water management. Plumbing requests frequently center on check valves, backflow prevention, sump pump reliability, and bathroom upgrades in picturesque vintage residences.",
    neighborhoodHighlights: [
      "Riverfront Downtown District",
      "Roosevelt Park Environs",
      "Sunny Acres",
      "North Cranford Residential Core",
    ],
    commonNeeds: [
      "Sump pump maintenance and emergency battery backups",
      "Backwater valve installation to prevent river backflow",
      "Kitchen and bathroom plumbing fixture maintenance",
      "Routine drain cleaning and sewer line clears",
    ],
  },
  {
    id: "roselle",
    name: "Roselle, NJ",
    slug: "roselle",
    county: "Union County",
    state: "New Jersey",
    postalCodes: ["07203"],
    description:
      "Bordering Elizabeth to the southwest, Roselle features historic residential pockets, classic bungalows, and mid-century single-family properties. Homeowners in Roselle frequently seek dependable local assistance for drain snaking, gas water heater tune-ups, leaky outdoor hose bibs, and bathroom valve updates.",
    neighborhoodHighlights: [
      "Chestnut Street Corridor",
      "Roselle Golf Club Neighborhood",
      "East 1st Avenue Area",
      "Warinanco Park Border",
    ],
    commonNeeds: [
      "Clogged main sewer lateral clearing",
      "Water heater replacements and repairs",
      "Leaking shower valves and toilet replacements",
      "Outdoor spigot freeze damage repairs",
    ],
  },
  {
    id: "fanwood",
    name: "Fanwood, NJ",
    slug: "fanwood",
    county: "Union County",
    state: "New Jersey",
    postalCodes: ["07023"],
    description:
      "A charming, compact borough nestled next to Scotch Plains, Fanwood is celebrated for its historic Victorian train station and tight-knit community neighborhoods. Residential properties benefit from straightforward plumbing maintenance, including fixture modernizations, water pressure balancing, and routine drain clearing.",
    neighborhoodHighlights: [
      "Historic Fanwood Train Station Core",
      "Forest Road / Midway Area",
      "LaGrande Park Residential Environs",
      "North Avenue Commercial Area",
    ],
    commonNeeds: [
      "Sink and shower drain clearing",
      "Water pressure regulator checks and repairs",
      "Hot water tank inspections and flushings",
      "Bathroom faucet and toilet mechanism replacements",
    ],
  },
];

