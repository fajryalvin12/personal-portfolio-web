"use client";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import picProfile from "../assets/profile_image_portfolio.jpeg";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Container className="flex flex-col md:flex-row gap-8 items-center">
        <Section>
          <h1 className="text-[var(--blue-eclipse-3)]">
            Fullstack Web Developer
          </h1>
          <p>
            Building scalable and reliable web applications with a strong focus
            on performance and user experience.
          </p>
          <p>
            Former Customer Service professional turned developer — bringing
            problem-solving, communication, and user-first thinking into every
            system I build..
          </p>
        </Section>
        <Section>
          <Image
            width={400}
            height={800}
            src={picProfile}
            alt="Profile"
            className="rounded-2xl shadow-lg object-cover hover:scale-105 transition-all duration-200"
          />
        </Section>
      </Container>
    </>
  );
}
