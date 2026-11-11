import type { Service } from "@/types/content";
import { unsplash } from "./media";

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
    image: unsplash("1502672260266-1c1ef2d93688"),
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
    image: unsplash("1600047509807-ba8f99d2cdde"),
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
    image: unsplash("1560448204-e02f11c3d0e2"),
  },
];
