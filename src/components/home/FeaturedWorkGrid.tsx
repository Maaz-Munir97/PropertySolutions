import ProjectCard from "@/components/portfolio/ProjectCard";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import type { Project } from "@/types/content";

export default function FeaturedWorkGrid({ projects }: { projects: Project[] }) {
  return (
    <section className="py-24 sm:py-32 lg:hidden">
      <div className="container-x">
        <SectionHeading
          eyebrow="Selected work"
          title={
            <>
              Homes we&apos;ve <em className="text-gold">brought to life.</em>
            </>
          }
          text="A look at recent properties we've leased, restored and managed across Australia."
        />
        <div className="mt-14 grid gap-12 sm:grid-cols-2 sm:gap-8">
          {projects.map((project, i) => (
            <Reveal key={project.slug} delay={i * 0.05}>
              <ProjectCard project={project} sizes="(min-width: 640px) 50vw, 100vw" />
            </Reveal>
          ))}
        </div>
        <Button href="/portfolio" variant="dark" className="mt-14">
          View all projects
        </Button>
      </div>
    </section>
  );
}
