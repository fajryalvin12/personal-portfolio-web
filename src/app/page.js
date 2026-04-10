"use client";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import picProfile from "../assets/profile_image_portfolio.jpeg";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { useEffect, useState } from "react";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const init = "opacity-0 translate-y-3 scale-95";
  const appears = "opacity-100 translate-y-0 scale-100";

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      <Container className="space-y-6 py-16">
        <Section className="flex flex-col md:flex-row items-center gap-8 py-16">
          <div className="flex-1 space-y-6 max-w-2xl">
            <h1
              className={`transition-all duration-700 ease-out text-4xl md:text-6xl font-bold tracking-tight ${isVisible ? appears : init}`}
            >
              <span className="text-[var(--blue-eclipse-3)]">Fullstack</span>{" "}
              Web Developer
            </h1>
            <p
              className={`text-lg text-muted-foreground transition-all duration-700 ease-out delay-200 ${isVisible ? appears : init}`}
            >
              Building scalable and reliable web applications with a strong
              focus on performance and user experience.
            </p>
            <p
              className={`text-sm text-muted-foreground transition-all duration-700 ease-out delay-400 ${isVisible ? appears : init}`}
            >
              Former Customer Service professional turned developer — bringing
              problem-solving, communication, and user-first thinking into every
              system I build.
            </p>
            <div
              className={`flex gap-4 transition-all duration-700 ease-out delay-600 ${isVisible ? appears : init}`}
            >
              <Button>View Projects</Button>
              <Button variant="outline">Contact Me</Button>
            </div>
          </div>

          <div
            className={`flex-1 flex justify-center overflow-hidden transition-all duration-700 ease-out delay-800 ${isVisible ? appears : init}`}
          >
            <Image
              width={400}
              height={800}
              src={picProfile}
              alt="Profile"
              className="rounded-2xl shadow-lg object-cover hover:scale-105 transition-all duration-300"
            />
          </div>
        </Section>
      </Container>
    </>
  );
}
