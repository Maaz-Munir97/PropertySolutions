"use client";

import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";
import ProjectCard from "@/components/portfolio/ProjectCard";
import Button from "@/components/ui/Button";
import type { Project } from "@/types/content";

const spring = { stiffness: 120, damping: 30 };

export default function FeaturedWorkScroller({ projects }: { projects: Project[] }) {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [distance, setDistance] = useState(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const measure = () => setDistance(Math.max(0, track.scrollWidth - window.innerWidth));
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(track);
    window.addEventListener("resize", measure);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, [0, 1], [0, -distance]);
  const smoothX = useSpring(x, { ...spring, mass: 0.4 });
  const progress = useSpring(scrollYProgress, spring);

  return (
    <section ref={sectionRef} className="relative hidden lg:block" style={{ height: `calc(100vh + ${distance}px)` }}>
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
        <motion.div ref={trackRef} style={{ x: smoothX }} className="flex w-max items-center gap-10 pr-24 pl-12">
          <div className="flex w-[30vw] shrink-0 flex-col justify-center pr-8">
            <span className="eyebrow text-gold">Selected work</span>
            <h2 className="display mt-5 text-6xl leading-[1.05]">
              Homes we&apos;ve <em className="text-gold">brought to life.</em>
            </h2>
            <p className="mt-6 max-w-sm text-lg text-stone">
              A look at recent properties we&apos;ve leased, restored and managed across Australia.
            </p>
            <Button href="/portfolio" variant="dark" className="mt-10 self-start">
              View all projects
            </Button>
          </div>
          {projects.map((project, i) => (
            <ProjectCard
              key={project.slug}
              project={project}
              tall={i % 2 === 0}
              sizes="30vw"
              className={i % 2 === 0 ? "w-[27vw] shrink-0" : "w-[34vw] shrink-0"}
            />
          ))}
        </motion.div>

        <div className="container-x mt-12">
          <div className="h-px w-full bg-ink/10">
            <motion.div style={{ scaleX: progress }} className="h-px origin-left bg-gold" />
          </div>
        </div>
      </div>
    </section>
  );
}
