"use client";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import picProfile from "../assets/profile_image_portfolio.jpeg";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Container className="flex gap-8 items-center">
        <Section title="Fullstack Web Developer">
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
            className="rounded-md"
          />
        </Section>
      </Container>
    </>
  );
}
