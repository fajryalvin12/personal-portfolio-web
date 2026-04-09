import Container from "@/components/ui/Container";
export default function About() {
  return (
    <>
      <Container className="flex gap-4">
        {/* About Me */}
        <div className="flex-1/2 border p-4 rounded-md hover:shadow-md">
          <h1>About Me</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
            eveniet, amet quos nemo mollitia odio, eos in repellendus saepe
            aliquam fugit dolore sapiente facere sit alias reprehenderit
            nostrum. Vitae, eveniet.
          </p>
        </div>

        {/* Tech Stack & Education */}
        <div className="flex-1/2 flex flex-col gap-4">
          <div className="border p-4 rounded-md hover:shadow-md">
            Tech Stack
          </div>
          <div className="border p-4 rounded-md hover:shadow-md">Education</div>
        </div>
      </Container>
    </>
  );
}
