import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

export default function Contact() {
  return (
    <Container className="py-16 space-y-16 flex flex-col gap-4 ">
      {/* Contact Form */}
      <Card
        title="Send message here!"
        description="Feel free to ask or discuss"
      >
        <form className="flex flex-col gap-4 rounded-md max-w-[600px]">
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
            <textarea
              className="border rounded-md min-h-3xl"
              type="text"
              id="message"
              name="message"
            ></textarea>
          </div>
          <Button variant="outline">Submit!</Button>
        </form>
      </Card>
      {/* Social Media */}
      <div className="flex gap-6">
        <div>Instagram</div>
        <div>LinkedIn</div>
        <div>Github</div>
        <div>WhatsApp</div>
      </div>
    </Container>
  );
}
