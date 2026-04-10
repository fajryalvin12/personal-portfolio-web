import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

export default function Projects() {
  const projects = [
    {
      title: "Tickhub",
      description:
        "Full-featured online live event booking platform with responsive design for both mobile and desktop users. Integrated event listing, ticket category, and user authentication using Golang and PostgreSQL, secured with JWT",
      techStack: ["React.js", "Go", "PostgreSQL"],
    },
    {
      title: "E-Kinerja",
      description:
        "Government-scale web application for employee performance evaluation, using PHP Native, jQuery, and MySQL",
      techStack: ["jQuery", "PHP Native", "MySQL"],
    },
    {
      title: "Simple Login Page",
      description:
        "Mini frontend app for login, handled by Authentication, hashing password for security and using localStorage for storing data",
      techStack: ["HTML", "CSS", "JS", "Local Storage"],
    },
    {
      title: "Simple Cashier App",
      description:
        "Backend app with solid microservices architecture for product management and safety transaction using Node.js & Express, Prisma ORM, PostgreSQL and JWT for auth",
      techStack: ["Node.js", "Express", "Prisma ORM", "PostgreSQL"],
    },
  ];

  return (
    <>
      <Container>
        {/* Project Showcase */}
        <Section className="flex gap-4 justify-center">
          {/* Variant Button */}
          <Button variant="outline" size="sm" children="Frontend" />
          <Button variant="outline" size="sm" children="Backend" />
          <Button variant="outline" size="sm" children="Fullstack" />
        </Section>
        <Section className="flex gap-4 overflow-x-scroll overflow-y-hidden scroll-smooth">
          {/* Detail Project */}
          {projects.map((item) => (
            <Card
              key={item.title}
              title={item.title}
              description={item.description}
              techStack={item.techStack}
              className="max-w-sm mx-auto"
            >
              <Button variant="outline" size="sm">
                Link
              </Button>
            </Card>
          ))}
        </Section>
        <Section className="flex justify-center gap-4">
          <Button variant="outline" size="sm" children="Prev" />
          <Button variant="outline" size="sm" children="Next" />
        </Section>
      </Container>
    </>
  );
}
