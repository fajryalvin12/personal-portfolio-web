import Container from "@/components/ui/Container";

export default function Contact() {
  return (
    <>
      <Container className="flex flex-col gap-4">
        {/* Contact Form */}
        <form className="flex flex-col gap-4 p-4 border rounded-md max-w-[600px]">
          <div className="flex flex-col gap-2">
            <label for="name">Name</label>
            <input
              className="border rounded-md"
              type="text"
              id="name"
              name="name"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label for="email">Email</label>
            <input
              className="border rounded-md"
              type="email"
              id="email"
              name="email"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label for="message">Message</label>
            <input
              className="border rounded-md"
              type="text"
              id="message"
              name="message"
            />
          </div>
          <button className="border rounded-md p-2">Send a message!</button>
        </form>

        {/* Social Media */}
        <div className="flex gap-6">
          <div>Instagram</div>
          <div>LinkedIn</div>
          <div>Github</div>
          <div>WhatsApp</div>
        </div>
      </Container>
    </>
  );
}
