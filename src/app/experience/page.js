import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import Section from "@/components/ui/Section";

export default function Experience() {
  return (
    <>
      <Container className="flex gap-4">
        <Section className="flex gap-4">
          <Card title="Experience (Title) 1" description="Company - Date">
            <p className="text-sm">Job Description</p>
          </Card>
          <Card title="Experience (Title) 2" description="Company - Date">
            <p className="text-sm">Job Description</p>
          </Card>
          <Card title="Experience (Title) 3" description="Company - Date">
            <p className="text-sm">Job Description</p>
          </Card>
        </Section>
      </Container>
    </>
  );
}
