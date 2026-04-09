"use-client";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";

export default function Home() {
  return (
    <>
      <Container className="flex">
        <Section title="Section">
          <h1>Branding Section</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
            eveniet, amet quos nemo mollitia odio, eos in repellendus saepe
            aliquam fugit dolore sapiente facere sit alias reprehenderit
            nostrum. Vitae, eveniet.
          </p>
          <Button variant="outline" size="md" children="Outline" />
          <Button variant="primary" size="md" children="Primary" />
        </Section>
        <Section>
          <Card title="Image" />
        </Section>
      </Container>
    </>
  );
}
