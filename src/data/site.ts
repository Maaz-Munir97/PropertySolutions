import type { NavItem } from "@/types/content";

export const site = {
  name: "Click&Get Solution",
  shortName: "Click&Get",
  wordmarkSub: "SOLUTION",
  tagline: "Professional, down-to-earth property and asset management in Australia.",
  description:
    "Property management, asset oversight and investment advisory for Australian owners — local, honest and easy to reach.",
  phone: "+1 123 456",
  phoneHref: "tel:+1123456",
  email: "clickandget@info.com",
  address: "Australia",
  hours: "Monday – Friday, 9:00 AM – 5:00 PM",
};

export const nav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Our Work", href: "/portfolio" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];
