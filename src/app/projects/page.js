import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

export default function Projects() {
  return (
    <>
      <div className="flex gap-4 px-4 justify-between py-4 h-screen">
        {/* Project Showcase */}

        <div className="flex flex-col gap-4 p-4 w-full">
          {/* Variant Button */}
          <div className="flex justify-evenly">
            <Button variant="outline" size="sm" children="Frontend" />
            <Button variant="outline" size="sm" children="Backend" />
            <Button variant="outline" size="sm" children="Fullstack" />
          </div>

          {/* Detail Project */}
          <div className="">
            <div className="flex flex-col gap-4 items-center">
              <Card
                title="Project Card 1"
                description="Description Project 1"
                techStack={["React", "Node", "PostgreSQL"]}
                image="https://fastly.picsum.photos/id/898/200/300.jpg?hmac=t4CBtj0-seR5dcy3U9f3RETPJo3tVYgUSvwcMV-cL-o"
              >
                <Button variant="outline" size="sm">
                  Link
                </Button>
              </Card>
              <div className="flex gap-4">
                <Button variant="outline" size="sm" children="Prev" />
                <Button variant="outline" size="sm" children="Next" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
