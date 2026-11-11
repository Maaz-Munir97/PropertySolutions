import { projects } from "@/data/projects";
import FeaturedWorkGrid from "./FeaturedWorkGrid";
import FeaturedWorkScroller from "./FeaturedWorkScroller";

const FEATURED_COUNT = 5;

export default function FeaturedWork() {
  const featured = projects.slice(0, FEATURED_COUNT);

  return (
    <>
      <FeaturedWorkScroller projects={featured} />
      <FeaturedWorkGrid projects={featured.slice(0, 4)} />
    </>
  );
}
