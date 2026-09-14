/**
 * All site copy and data lives here so it can be edited in one place.
 * NOTE: stats, portfolio entries and most testimonials are demo placeholders —
 * replace them with real figures before going live.
 */

const img = (id: string) => `https://images.unsplash.com/photo-${id}`;

export const site = {
  name: "Property Solutions QLD",
  tagline: "Professional, down-to-earth property and asset management.",
  phone: "+61 7 3265 4111",
  phoneHref: "tel:+61732654111",
  email: "hello@propertysolutionsqld.com.au",
  address: "Brisbane City QLD 4000, Australia",
  hours: "Monday – Friday, 9:00 AM – 5:00 PM",
};

export const nav = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Our Work", href: "/portfolio" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const images = {
  hero: img("1600596542815-ffad4c1539a9"),
  interior: img("1600607687939-ce8a6c25118c"),
  living: img("1600566753190-17f0baa2a6c3"),
  city: img("1486406146926-c627a92ad1ab"),
  office: img("1497366216548-37526070297c"),
  about: img("1600210492486-724fe5c67fb0"),
  contact: img("1616594039964-ae9021a400a0"),
};

export const stats = [
  { value: 18, suffix: "+", label: "Years in Brisbane" },
  { value: 420, suffix: "+", label: "Properties managed" },
  { value: 98, suffix: "%", label: "Occupancy rate" },
  { value: 21, suffix: " days", label: "Average time to lease" },
];

export type Service = {
  slug: string;
  number: string;
  title: string;
  summary: string;
  description: string;
  points: string[];
  image: string;
};

export const services: Service[] = [
  {
    slug: "property-management",
    number: "01",
    title: "Property Management",
    summary: "Tenants, rent, inspections and repairs — handled end to end.",
    description:
      "From the first listing photo to the final bond return, we run the day-to-day of your rental so it performs without taking over your week.",
    points: [
      "Tenant screening & lease management",
      "Routine, entry and exit inspections",
      "Rent collection & arrears follow-up",
      "Repairs coordinated with trusted local trades",
    ],
    image: img("1502672260266-1c1ef2d93688"),
  },
  {
    slug: "asset-oversight",
    number: "02",
    title: "Asset Oversight",
    summary: "Reporting and upkeep planning that keeps a property performing.",
    description:
      "Occupied is not the same as performing. We plan maintenance, track compliance and report clearly so your asset holds its value year after year.",
    points: [
      "Monthly financial statements",
      "Maintenance & capital works planning",
      "Insurance and compliance tracking",
      "End-of-financial-year summaries",
    ],
    image: img("1600047509807-ba8f99d2cdde"),
  },
  {
    slug: "investment-advisory",
    number: "03",
    title: "Investment Advisory",
    summary: "Straight guidance on your next purchase, sale or portfolio move.",
    description:
      "Brisbane is a dozen markets in one. We help owners read suburb-level shifts and decide whether to buy, hold or sell — without the sales pitch.",
    points: [
      "Rental yield & growth assessment",
      "Portfolio review for existing owners",
      "Buy, hold or sell recommendations",
      "Suburb-level market briefings",
    ],
    image: img("1560448204-e02f11c3d0e2"),
  },
];

export const process = [
  {
    step: "01",
    title: "Free appraisal",
    text: "We visit, assess the property and give you an honest rental estimate.",
  },
  {
    step: "02",
    title: "Tailored plan",
    text: "A clear management plan covering pricing, presentation and upkeep.",
  },
  {
    step: "03",
    title: "Lease & settle in",
    text: "We market, screen and place the right tenants — quickly.",
  },
  {
    step: "04",
    title: "Ongoing care",
    text: "Inspections, maintenance and monthly reporting, on autopilot.",
  },
];

export type Project = {
  slug: string;
  title: string;
  suburb: string;
  category: "Residential" | "Apartment" | "Luxury" | "Commercial";
  image: string;
  gallery: string[];
  result: string;
  beds?: number;
  baths?: number;
  summary: string;
  challenge: string;
  approach: string[];
  outcomes: { label: string; value: string }[];
};

export const projects: Project[] = [
  {
    slug: "new-farm-riverside-residence",
    title: "Riverside Residence",
    suburb: "New Farm",
    category: "Luxury",
    image: img("1613490493576-7fde63acd811"),
    gallery: [img("1600607687939-ce8a6c25118c"), img("1600566753190-17f0baa2a6c3")],
    result: "Leased in 9 days",
    beds: 5,
    baths: 4,
    summary: "A five-bedroom riverfront home repositioned for the executive rental market.",
    challenge:
      "The home had sat vacant for two months under a previous agency with pricing that didn't reflect its riverfront position.",
    approach: [
      "Re-priced against recent New Farm executive leases",
      "Professional styling and twilight photography",
      "Targeted relocation-agent outreach",
    ],
    outcomes: [
      { label: "Days to lease", value: "9" },
      { label: "Rent increase", value: "+14%" },
      { label: "Lease term", value: "24 mo" },
    ],
  },
  {
    slug: "west-end-urban-apartment",
    title: "Urban Apartment",
    suburb: "West End",
    category: "Apartment",
    image: img("1502672260266-1c1ef2d93688"),
    gallery: [img("1560448204-e02f11c3d0e2"), img("1600210492486-724fe5c67fb0")],
    result: "+11% yield",
    beds: 2,
    baths: 2,
    summary: "A two-bedroom investor apartment brought back to full performance.",
    challenge:
      "High tenant turnover and deferred maintenance were eroding the owner's returns.",
    approach: [
      "Minor refresh of kitchen and flooring",
      "Tighter tenant screening criteria",
      "Planned maintenance calendar",
    ],
    outcomes: [
      { label: "Yield uplift", value: "+11%" },
      { label: "Vacancy", value: "0 days" },
      { label: "Tenancy", value: "3 yrs+" },
    ],
  },
  {
    slug: "paddington-queenslander",
    title: "Restored Queenslander",
    suburb: "Paddington",
    category: "Residential",
    image: img("1568605114967-8130f3a36994"),
    gallery: [img("1600047509807-ba8f99d2cdde"), img("1600566753190-17f0baa2a6c3")],
    result: "Fully compliant in 30 days",
    beds: 4,
    baths: 2,
    summary: "A character home managed through restoration and a smooth first lease.",
    challenge:
      "Heritage considerations and a staged renovation meant careful trade coordination.",
    approach: [
      "Coordinated licensed heritage trades",
      "Staged compliance and safety checks",
      "Launched to market the week works finished",
    ],
    outcomes: [
      { label: "Compliance", value: "30 days" },
      { label: "Applications", value: "27" },
      { label: "Rent vs. est.", value: "+8%" },
    ],
  },
  {
    slug: "cbd-commercial-suite",
    title: "Commercial Suite",
    suburb: "Brisbane CBD",
    category: "Commercial",
    image: img("1497366216548-37526070297c"),
    gallery: [img("1486406146926-c627a92ad1ab"), img("1449844908441-8829872d2607")],
    result: "5-year lease secured",
    summary: "A mid-floor office suite re-tenanted with a long-term professional tenant.",
    challenge:
      "Post-lease-expiry vacancy in a competitive CBD office market.",
    approach: [
      "Flexible fit-out incentive structure",
      "Direct outreach to local professional firms",
      "Detailed outgoings reporting for the owner",
    ],
    outcomes: [
      { label: "Lease term", value: "5 yrs" },
      { label: "Vacancy", value: "6 wks" },
      { label: "Incentive", value: "Below mkt" },
    ],
  },
  {
    slug: "ascot-family-home",
    title: "Family Home",
    suburb: "Ascot",
    category: "Residential",
    image: img("1570129477492-45c003edd2be"),
    gallery: [img("1600607687939-ce8a6c25118c"), img("1600210492486-724fe5c67fb0")],
    result: "Leased above appraisal",
    beds: 4,
    baths: 3,
    summary: "A leafy family home placed with long-term tenants near top schools.",
    challenge:
      "The owner was relocating overseas and needed hands-off, reliable management.",
    approach: [
      "Remote-friendly monthly video reports",
      "School-catchment focused marketing",
      "Pre-approved maintenance budget",
    ],
    outcomes: [
      { label: "Above appraisal", value: "+6%" },
      { label: "Days to lease", value: "12" },
      { label: "Owner visits", value: "0" },
    ],
  },
  {
    slug: "hamilton-modern-villa",
    title: "Modern Villa",
    suburb: "Hamilton",
    category: "Luxury",
    image: img("1580587771525-78b9dba3b914"),
    gallery: [img("1600566753190-17f0baa2a6c3"), img("1600047509807-ba8f99d2cdde")],
    result: "Portfolio review: +2 assets",
    beds: 4,
    baths: 3,
    summary: "An investor's flagship property and a wider portfolio strategy.",
    challenge:
      "The owner wanted to grow their portfolio without over-extending.",
    approach: [
      "Full yield and equity review",
      "Suburb shortlist backed by rental data",
      "Managed both new acquisitions from settlement",
    ],
    outcomes: [
      { label: "New assets", value: "2" },
      { label: "Portfolio yield", value: "5.1%" },
      { label: "Vacancy", value: "0 days" },
    ],
  },
];

export const testimonials = [
  {
    quote: "Professional, down to earth property and asset management.",
    name: "Thomas L. Moss",
    role: "Property owner",
    avatar: img("1507003211169-0a1dd7228f2d"),
  },
  {
    quote:
      "I live interstate and never have to worry. The monthly reports are clear and they actually pick up the phone.",
    name: "Sarah K.",
    role: "Investor, West End",
    avatar: img("1494790108377-be9c29b29330"),
  },
  {
    quote:
      "They re-priced our place properly and had quality tenants in within two weeks. Wish we'd switched sooner.",
    name: "David & Priya R.",
    role: "Owners, Ascot",
    avatar: img("1500648767791-00dcc994a43e"),
  },
];

export const suburbs = [
  "New Farm",
  "West End",
  "Paddington",
  "Ascot",
  "Hamilton",
  "Brisbane CBD",
  "Kangaroo Point",
  "Bulimba",
  "Toowong",
  "Ipswich",
  "Teneriffe",
  "South Brisbane",
];

export const values = [
  {
    title: "Straight answers",
    text: "Honest appraisals and clear advice — never a sales pitch.",
  },
  {
    title: "Local, not national",
    text: "Based in Brisbane City and watching the suburbs you actually own in.",
  },
  {
    title: "One point of contact",
    text: "A dedicated manager who knows your property and your goals.",
  },
];
