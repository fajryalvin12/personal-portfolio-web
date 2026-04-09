import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
export default function About() {
  return (
    <>
      <Container className="flex gap-4">
        {/* About Me */}
        <Card
          title="About Me"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
            eveniet, amet quos nemo mollitia odio, eos in repellendus saepe
            aliquam fugit dolore sapiente facere sit alias reprehenderit
            nostrum. Vitae, eveniet."
        ></Card>
        {/* Tech Stack & Education */}
        <div className="flex-1/2 flex flex-col gap-4">
          <Card title="Tech Stack"></Card>
          <Card title="Education"></Card>
        </div>
      </Container>
    </>
  );
}
