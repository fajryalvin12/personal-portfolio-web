import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import Section from "@/components/ui/Section";

export default function Contact() {
  return (
    <>
      <Container className="flex flex-col gap-4">
        {/* Contact Form */}

        <Section>
          <Card
            title="Send message here!"
            description="Feel free to ask or discuss"
          >
            <form className="flex flex-col gap-4 p-4 border rounded-md max-w-[600px]">
              <div className="flex flex-col gap-2">
                <label htmlFor="name">Name</label>
                <input
                  className="border rounded-md"
                  type="text"
                  id="name"
                  name="name"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email">Email</label>
                <input
                  className="border rounded-md"
                  type="email"
                  id="email"
                  name="email"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="message">Message</label>
                <input
                  className="border rounded-md"
                  type="text"
                  id="message"
                  name="message"
                />
              </div>
              <button className="border rounded-md p-2">Send a message!</button>
            </form>
          </Card>
        </Section>

        {/* Social Media */}

        <Section>
          <div className="flex gap-6">
            <div>Instagram</div>
            <div>LinkedIn</div>
            <div>Github</div>
            <div>WhatsApp</div>
          </div>
        </Section>
      </Container>
    </>
  );
}
