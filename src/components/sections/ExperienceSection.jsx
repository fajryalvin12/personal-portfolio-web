"use client";

import { useEffect, useRef, useState } from "react";
import Container from "@/components/ui/Container";
import { experiences } from "@/data/portfolio";

function useInView() {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.05 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return [ref, inView];
}

export default function ExperienceSection() {
  const [ref, inView] = useInView();

  const base = "transition-all duration-700 ease-out";
  const hidden = "opacity-0 translate-y-6";
  const visible = "opacity-100 translate-y-0";

  return (
    <section id="experience" aria-labelledby="experience-heading" className="py-20" ref={ref}>
      <Container>
        <h2
          id="experience-heading"
          className={`${base} ${inView ? visible : hidden} text-2xl md:text-3xl font-bold tracking-tight mb-10`}
          style={{ transitionDelay: "0ms" }}
        >
          Experience
        </h2>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-3 md:left-4 top-0 bottom-0 w-px bg-white/10" aria-hidden="true" />

          <ol className="space-y-10">
            {experiences.map((item, i) => (
              <li
                key={item.title + item.company}
                className={`${base} ${inView ? visible : hidden} relative pl-10 md:pl-12`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                {/* Dot */}
                <span
                  className="absolute left-0 top-1.5 w-6 h-6 md:w-8 md:h-8 rounded-full bg-[var(--blue-eclipse-3)] border-2 border-[var(--blue-eclipse-2)] flex items-center justify-center text-xs font-bold"
                  aria-hidden="true"
                >
                  {i + 1}
                </span>

                {/* Content */}
                <div className="bg-[var(--blue-eclipse-1)] rounded-xl p-5 border border-white/10 shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-3">
                    <div>
                      <h3 className="font-semibold text-base leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-sm text-[var(--blue-eclipse-2)]">
                        {item.company}
                      </p>
                    </div>
                    <span className="text-xs text-[var(--blue-eclipse-2)] whitespace-nowrap mt-1 sm:mt-0">
                      {item.period}
                    </span>
                  </div>

                  <ul className="space-y-1.5">
                    {item.jobdesc.map((point, j) => (
                      <li key={j} className="text-sm text-[var(--blue-eclipse-2)] flex gap-2">
                        <span className="mt-1.5 w-1 h-1 rounded-full bg-[var(--blue-eclipse-2)] shrink-0" aria-hidden="true" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
