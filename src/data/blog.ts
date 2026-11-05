import { BlogPostItem } from "@/types";
import { hiddenLeakArticle } from "./blog/signs-of-hidden-plumbing-leak";

export { hiddenLeakArticle };

export const blogPostsData: BlogPostItem[] = [
  hiddenLeakArticle,
  {
    id: "what-to-do-when-pipe-bursts",
    slug: "what-to-do-when-pipe-bursts",
    title: "What to Do When a Pipe Bursts in Your Home",
    metaTitle: "What to Do When a Pipe Bursts in Your Home",
    metaDescription:
      "A burst pipe can release hundreds of gallons quickly. Follow this critical checklist to shut off the main water valve and protect your home from damage.",
    category: "Emergency Preparedness",
    excerpt:
      "A burst water pipe can release hundreds of gallons in minutes. Follow this critical step-by-step checklist to protect your home and prevent catastrophic structural damage.",
    publishedDate: "November 2, 2026",
    readTime: "4 min read",
    image: "/images/blog/burst-pipe-prevention.webp",
    content: [
      "Plumbing failures rarely happen at a convenient time. When freezing winter temperatures or corrosion cause a pressurized water pipe to rupture, fast decisive action makes the difference between a simple cleanup and tens of thousands of dollars in restoration costs.",
      "Step 1: Shut Off the Main Water Valve Immediately. Every adult in your home should know the exact location of your main water shut-off valve. In Elizabeth homes, this valve is typically located in the basement near the front wall where the municipal line enters the property, or in an access box near the meter. Turn the valve clockwise (or 90 degrees if it is a ball lever) until water stops flowing.",
      "Step 2: Relieve Line Pressure. Open the cold water faucets in your lowest fixtures (like a basement wash tub or laundry sink) and outdoors to drain the remaining water sitting in vertical pipe runs.",
      "Step 3: Manage Electrical Safety. Never walk into standing water if electrical outlets or appliances are submerged. Switch off the main breaker switch or affected sub-panels from a dry area.",
      "Step 4: Contact a Local Professional. Call (908) 738-8526 to request prompt plumbing repair assistance and begin documenting water damage for your homeowner's insurance claim.",
    ],
  },
  {
    id: "common-causes-slow-drains-prevention",
    slug: "common-causes-slow-drains-prevention",
    title: "Common Causes of Slow Drains and How to Prevent Them",
    metaTitle: "Causes of Slow Drains & Prevention",
    metaDescription:
      "Learn what clogs residential drains—from solidifying grease to soap scum—and discover practical prevention tips to keep your household pipes clear.",
    category: "Preventative Maintenance",
    excerpt:
      "Learn what secretly clogs residential drain lines—from kitchen grease solidifying to bathroom soap scum—and practical ways to keep your pipes flowing freely.",
    publishedDate: "October 24, 2026",
    readTime: "5 min read",
    image: "/images/blog/kitchen-drain-maintenance.webp",
    content: [
      "Sluggish drains are among the most frequent plumbing nuisances in Union County homes. While reaching for caustic chemical drain cleaners is a common impulse, those harsh chemicals often corrode older metal pipes and release toxic fumes without permanently clearing the blockage.",
      "Understanding Drain Culprits: Kitchen drains primarily suffer from FOG (Fats, Oils, and Grease). Even when rinsed down with warm water, cooking fats cool down inside horizontal pipe runs, adhering to pipe walls and catching food particles. Bathroom sinks and showers, conversely, face a combination of shedding hair, soap scum, and toothpaste binding together.",
      "Best Practices for Prevention: Install inexpensive mesh drain catchers in every shower and tub. Never pour liquid cooking oils or bacon grease into the sink; instead, let them cool in a can and discard in the trash. Flush drains weekly with hot boiling water followed by a baking soda and vinegar rinse to naturally break down minor surface build-up.",
      "When to Seek Help: If multiple fixtures gurgle or drain slowly at the same time, the restriction is likely inside your home's main building drain or sewer line, which requires mechanical snaking or hydro-jetting.",
    ],
  },
  {
    id: "signs-water-heater-needs-repair",
    slug: "signs-water-heater-needs-repair",
    title: "Signs Your Water Heater May Need Repair",
    metaTitle: "Signs Your Water Heater May Need Repair",
    metaDescription:
      "Recognize the early warning signals of water heater failure—including metallic odors, clanking noises, and lukewarm water—before a breakdown occurs.",
    category: "Equipment Care",
    excerpt:
      "Discover the early warning signals of water heater failure—including metallic odors, knocking noises, and erratic temperatures—before a complete breakdown occurs.",
    publishedDate: "October 15, 2026",
    readTime: "4 min read",
    image: "/images/blog/water-heater-inspection.webp",
    content: [
      "A residential water heater is the unsung workhorse of any household, continuously supplying hot water for showers, dishwashing, and laundry. Most standard tank heaters provide dependable operation for 8 to 12 years. Recognizing subtle warning signs allows you to schedule repairs before waking up to an icy shower or flooded basement.",
      "Key Indicator 1: Inconsistent or Lukewarm Water. If your hot water runs out halfway through a normal shower, either the lower heating element in an electric unit has failed, or excessive sediment has insulated the burner plate in a gas unit.",
      "Key Indicator 2: Popping, Rumbling, or Clanking Sounds. As hard water minerals settle to the bottom of the tank, water gets trapped underneath the sediment layer. When the burner fires, this trapped water boils violently into steam pockets, creating audible cracking or rumbling noises.",
      "Key Indicator 3: Discolored Water or Rusty Odors. Rust-tinted water coming exclusively from hot faucets often indicates that your sacrificial anode rod has fully depleted and the steel tank itself has begun oxidizing from the inside out.",
      "Key Indicator 4: Moisture or Drips Around the Unit. Any visible pooling of water around the base of the heater demands immediate attention. While it could be a simple temperature and pressure relief valve leak, tank fractures cannot be repaired and require unit replacement.",
    ],
  },
];

export function getBlogPostBySlug(slug: string): BlogPostItem | undefined {
  return blogPostsData.find((p) => p.slug === slug);
}

export function getAllBlogSlugs(): string[] {
  return blogPostsData.map((p) => p.slug);
}
