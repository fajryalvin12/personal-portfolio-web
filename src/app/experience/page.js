import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";

export default function Experience() {
  return (
    <>
      <Container className="flex gap-4">
        {/* Experience Showcases */}
        <Card title="Experience (Title) 1" description="Company - Date">
          <p className="text-sm">Job Description</p>
        </Card>
        <Card title="Experience (Title) 2" description="Company - Date">
          <p className="text-sm">Job Description</p>
        </Card>
        <Card title="Experience (Title) 3" description="Company - Date">
          <p className="text-sm">Job Description</p>
        </Card>
      </Container>
    </>
  );
}
