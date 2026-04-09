import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
export default function About() {
  return (
    <>
      <Container className="flex gap-4">
        {/* About Me */}
        <Section title="About Me">
          <Card
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
            eveniet, amet quos nemo mollitia odio, eos in repellendus saepe
            aliquam fugit dolore sapiente facere sit alias reprehenderit
            nostrum. Vitae, eveniet."
          ></Card>
        </Section>
        {/* Tech Stack & Education */}
        <Section className="flex flex-col gap-2">
          <Card className="flex" title="Tech Stack">
            <Button variant="outline" size="sm">
              React.js
            </Button>
            <Button variant="outline" size="sm">
              Go
            </Button>
          </Card>
          <Card title="Education"></Card>
        </Section>
        <div className=""></div>
      </Container>
    </>
  );
}
