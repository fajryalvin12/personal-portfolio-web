"use client";

import { useEffect, useRef, useState } from "react";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { techStacks, education } from "@/data/portfolio";

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

export default function AboutSection() {
  const [ref, inView] = useInView();

  const base = "transition-all duration-700 ease-out";
  const hidden = "opacity-0 translate-y-6";
  const visible = "opacity-100 translate-y-0";

  return (
    <section id="about" aria-labelledby="about-heading" className="py-20" ref={ref}>
      <Container className="space-y-14">
        {/* About Me */}
        <div className={`${base} ${inView ? visible : hidden}`} style={{ transitionDelay: "0ms" }}>
          <h2 id="about-heading" className="text-2xl md:text-3xl font-bold tracking-tight mb-6">
            About Me
          </h2>
          <Card description="I am a Fullstack Web Developer with hands-on experience building scalable web applications for both government and private sector projects. My journey into tech started after working for 2 years as a Customer Service representative, where I developed strong communication, problem-solving, and user-oriented thinking. That experience shaped how I approach software development today — not just from a technical perspective, but also from the user's point of view. I have worked with technologies such as Go, PHP, React.js, and PostgreSQL, and contributed to systems like E-Kinerja at Kementerian Pekerjaan Umum. I focus on building reliable, maintainable systems with clean architecture, efficient performance, and meaningful user impact." />
        </div>

        {/* Tech Stack */}
        <div className={`${base} ${inView ? visible : hidden}`} style={{ transitionDelay: "150ms" }}>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-6">
            Tech Stack
          </h2>
          <div className="flex flex-wrap gap-3">
            {techStacks.map((item) => (
              <Button key={item} variant="outline" size="sm" isBadge>
                {item}
              </Button>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className={`${base} ${inView ? visible : hidden}`} style={{ transitionDelay: "300ms" }}>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-6">
            Education
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {education.map((item) => (
              <Card key={item.title} title={item.title} description={item.description} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
