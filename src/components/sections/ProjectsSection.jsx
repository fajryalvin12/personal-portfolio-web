"use client";

import { useEffect, useRef, useState } from "react";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { projects } from "@/data/portfolio";

function useInView() {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return [ref, inView];
}

export default function ProjectsSection() {
  const [ref, inView] = useInView();

  const base = "transition-all duration-700 ease-out";
  const hidden = "opacity-0 translate-y-6";
  const visible = "opacity-100 translate-y-0";

  return (
    <section id="projects" aria-labelledby="projects-heading" className="py-20" ref={ref}>
      <Container>
        <h2
          id="projects-heading"
          className={`${base} ${inView ? visible : hidden} text-2xl md:text-3xl font-bold tracking-tight mb-10`}
          style={{ transitionDelay: "0ms" }}
        >
          Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projects.map((item, i) => (
            <div
              key={item.title}
              className={`${base} ${inView ? visible : hidden}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <Card
                title={item.title}
                description={item.description}
                techStack={item.techStack}
              >
                {item.link ? (
                  <Button variant="outline" size="sm">
                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                      View Project
                    </a>
                  </Button>
                ) : (
                  <span className="text-xs text-[var(--blue-eclipse-2)]">
                    Link coming soon
                  </span>
                )}
              </Card>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
