import Button from "./ui/Button";
export default function Hero() {
  return (
    <>
      <div className="flex gap-4 px-4 justify-between items-center h-screen">
        <div className="flex-1 flex flex-col gap-2 border p-4 rounded-md">
          <h1>Description Section</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
            eveniet, amet quos nemo mollitia odio, eos in repellendus saepe
            aliquam fugit dolore sapiente facere sit alias reprehenderit
            nostrum. Vitae, eveniet.
          </p>
          <span>Branding Session</span>
          <Button variant="outline" size="medium" children="Button" />
        </div>
        <div className="border p-4 rounded-md">Image Section</div>
      </div>
    </>
  );
}
