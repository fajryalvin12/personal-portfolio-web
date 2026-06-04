"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import picProfile from "@/assets/profile_image_portfolio.jpeg";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setIsVisible(true), 50);
    return () => clearTimeout(t);
  }, []);

  const base = "transition-all duration-700 ease-out";
  const hidden = "opacity-0 translate-y-4";
  const visible = "opacity-100 translate-y-0";

  return (
    <section id="hero" aria-labelledby="hero-heading" className="py-20 md:py-28">
      <Container>
        <div className="flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16">
          {/* Text content */}
          <div className="flex-1 space-y-6 text-center md:text-left">
            <h1
              id="hero-heading"
              className={`${base} ${isVisible ? visible : hidden} text-4xl md:text-6xl font-bold tracking-tight`}
              style={{ transitionDelay: "0ms" }}
            >
              <span className="text-[var(--blue-eclipse-2)]">Fullstack</span>{" "}
              Web Developer
            </h1>

            <p
              className={`${base} ${isVisible ? visible : hidden} text-lg text-[var(--blue-eclipse-2)]`}
              style={{ transitionDelay: "150ms" }}
            >
              Building scalable and reliable web applications with a strong
              focus on performance and user experience.
            </p>

            <p
              className={`${base} ${isVisible ? visible : hidden} text-sm text-[var(--blue-eclipse-2)]`}
              style={{ transitionDelay: "300ms" }}
            >
              Former Customer Service professional turned developer — bringing
              problem-solving, communication, and user-first thinking into every
              system I build.
            </p>

            <div
              className={`${base} ${isVisible ? visible : hidden} flex flex-wrap gap-4 justify-center md:justify-start`}
              style={{ transitionDelay: "450ms" }}
            >
              <Button variant="outline" size="md">
                <a href="#projects">View Projects</a>
              </Button>
              <Button variant="outline" size="md">
                <a href="#contact">Contact Me</a>
              </Button>
            </div>
          </div>

          {/* Profile image */}
          <div
            className={`${base} ${isVisible ? visible : hidden} flex-shrink-0`}
            style={{ transitionDelay: "200ms" }}
          >
            <Image
              src={picProfile}
              alt="Foto profil Fajry Alvin Hidayat"
              width={320}
              height={320}
              priority
              className="rounded-2xl shadow-lg object-cover hover:scale-105 transition-transform duration-300 w-56 h-56 md:w-80 md:h-80"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
