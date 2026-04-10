import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

export default function Projects() {
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
        <Section className="flex gap-4">
          {/* Detail Project */}
          <Card
            title="Project Card 1"
            description="Description Project 1"
            techStack={["React", "Node", "PostgreSQL"]}
          >
            <Button variant="outline" size="sm">
              Link
            </Button>
          </Card>
          <Card
            title="Project Card 2"
            description="Description Project 1"
            techStack={["React", "Node", "PostgreSQL"]}
          >
            <Button variant="outline" size="sm">
              Link
            </Button>
          </Card>
          <Card
            title="Project Card 3"
            description="Description Project 1"
            techStack={["React", "Node", "PostgreSQL"]}
          >
            <Button variant="outline" size="sm">
              Link
            </Button>
          </Card>
        </Section>
        <Section className="flex justify-center gap-4">
          <Button variant="outline" size="sm" children="Prev" />
          <Button variant="outline" size="sm" children="Next" />
        </Section>
      </Container>
    </>
  );
}
