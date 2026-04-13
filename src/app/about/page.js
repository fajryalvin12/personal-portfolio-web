"use client";

import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { useState, useEffect } from "react";
export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const init = "opacity-0 translate-y-3 scale-95";
  const appears = "opacity-100 translate-y-0 scale-100";

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stacks = [
    "Next.js",
    "React.js",
    "PHP",
    "Go",
    "Javascript",
    "HTML",
    "Tailwind CSS",
    "PostgreSQL",
    "MySQL",
    "Git",
    "Postman",
    "Trello",
  ];

  const education = [
    {
      title: "Koda Tech Academy",
      description: "Fullstack Website Developer & Golang (May - Sep 2024)",
    },
    {
      title: "Universitas Muhammadiyah Yogyakarta",
      description: "International Relations (Sep 2018 - Apr 2022)",
    },
  ];

  return (
    <Container className="space-y-16 py-16 flex flex-col gap-4 ">
      {/* About Me */}
      <Section
        className={`transition-all duration-700 ease-out ${isVisible ? appears : init}`}
        title="About Me"
      >
        <Card description="I am a Fullstack Web Developer with hands-on experience building scalable web applications for both government and private sector projects. My journey into tech started after working for 2 years as a Customer Service representative, where I developed strong communication, problem-solving, and user-oriented thinking. That experience shaped how I approach software development today — not just from a technical perspective, but also from the users point of view. I have worked with technologies such as Go, PHP, React.js, and PostgreSQL, and contributed to systems like E-Kinerja at Kementerian Pekerjaan Umum. I focus on building reliable, maintainable systems with clean architecture, efficient performance, and meaningful user impact."></Card>
      </Section>
      {/* Tech Stack & Education */}
      <Section
        className={`transition-all duration-700 ease-out delay-200 ${isVisible ? appears : init}`}
        title="Tech Stack"
      >
        <div className="flex flex-wrap gap-4">
          {stacks.map((item, index) => (
            <Button key={index + 1} variant="outline" size="sm" isBadge>
              {item}
            </Button>
          ))}
        </div>
      </Section>
      <Section
        className={`transition-all duration-700 ease-out delay-400 ${isVisible ? appears : init}`}
        title="Education"
      >
        <div className="flex md:flex-row flex-col gap-4">
          {education.map((item) => (
            <Card
              key={item.title}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </Section>
    </Container>
  );
}
