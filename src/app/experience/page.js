import Container from "@/components/ui/Container";

export default function Experience() {
  return (
    <>
      <Container className="flex gap-4">
        {/* Experience Showcases */}

        <div className="flex flex-col p-4 border rounded-md shadow-md gap-4 shrink-0">
          <div className="border rounded-md p-2">Experience Title</div>
          <div className="border rounded-md p-2">Experience Company</div>
          <div className="border rounded-md p-2">Experience Date</div>
          <div className="border rounded-md p-2">
            Experience Job Description
          </div>
        </div>
        <div className="flex flex-col p-4 border rounded-md shadow-md gap-4 shrink-0">
          <div className="border rounded-md p-2">Experience Title</div>
          <div className="border rounded-md p-2">Experience Company</div>
          <div className="border rounded-md p-2">Experience Date</div>
          <div className="border rounded-md p-2">
            Experience Job Description
          </div>
        </div>
        <div className="flex flex-col p-4 border rounded-md shadow-md gap-4 shrink-0">
          <div className="border rounded-md p-2">Experience Title</div>
          <div className="border rounded-md p-2">Experience Company</div>
          <div className="border rounded-md p-2">Experience Date</div>
          <div className="border rounded-md p-2">
            Experience Job Description
          </div>
        </div>
      </Container>
    </>
  );
}
