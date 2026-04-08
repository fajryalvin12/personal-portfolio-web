export default function Projects() {
  return (
    <>
      <div className="flex gap-4 px-4 justify-between py-4 h-screen">
        {/* Project Showcase */}

        <div className="flex flex-col gap-4 p-4 border rounded-md w-full">
          {/* Variant Button */}
          <div className="flex justify-evenly">
            <button className="border py-1 px-2 rounded-md">Frontend</button>
            <button className="border py-1 px-2 rounded-md">Backend</button>
            <button className="border py-1 px-2 rounded-md">Fullstack</button>
          </div>

          {/* Detail Project */}
          <div className="border p-4 rounded-md">
            <div className="flex gap-4 items-center">
              <h1 className="flex-2/3 border p-2 rounded-md">
                Project Description Card
              </h1>
              <div className="flex-1/3 border p-4 rounded-md">
                Project Image Card
              </div>
            </div>
            <div className="flex gap-4">
              <button className="px-2 py-1 border rounded-md">Prev</button>
              <button className="px-2 py-1 border rounded-md">Next</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
