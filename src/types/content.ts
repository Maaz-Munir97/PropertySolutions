export type NavItem = {
  label: string;
  href: string;
};

export type Stat = {
  value: number;
  suffix: string;
  label: string;
};

export type Service = {
  slug: string;
  number: string;
  title: string;
  summary: string;
  description: string;
  points: string[];
  image: string;
};

export type ProcessStep = {
  step: string;
  title: string;
  text: string;
};

export type ProjectCategory = "Residential" | "Apartment" | "Luxury" | "Commercial";

export type Outcome = {
  label: string;
  value: string;
};

export type Project = {
  slug: string;
  title: string;
  suburb: string;
  category: ProjectCategory;
  image: string;
  gallery: string[];
  result: string;
  beds?: number;
  baths?: number;
  summary: string;
  challenge: string;
  approach: string[];
  outcomes: Outcome[];
};

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

export type Value = {
  title: string;
  text: string;
};
