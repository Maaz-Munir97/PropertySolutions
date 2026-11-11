import type { ProcessStep, Stat, Value } from "@/types/content";

export const stats: Stat[] = [
  { value: 18, suffix: "+", label: "Years of experience" },
  { value: 420, suffix: "+", label: "Properties managed" },
  { value: 98, suffix: "%", label: "Occupancy rate" },
  { value: 21, suffix: " days", label: "Average time to lease" },
];

export const process: ProcessStep[] = [
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

export const values: Value[] = [
  {
    title: "Straight answers",
    text: "Honest appraisals and clear advice — never a sales pitch.",
  },
  {
    title: "Local, not national",
    text: "Local managers watching the suburbs you actually own in.",
  },
  {
    title: "One point of contact",
    text: "A dedicated manager who knows your property and your goals.",
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
