import Image from "next/image";

export default function Card({
  title,
  description,
  techStack,
  link,
  image,
  className,
  children,
}) {
  const cleanTechStack = techStack ? techStack.join(" • ").trim() : "";
  const baseStyle =
    "h-full bg-[var(--blue-eclipse-1)] rounded-xl p-4 flex flex-col gap-4 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl shrink-0 border border-white/10 backdrop-blur-sm";
  return (
    <>
      <article className={`${baseStyle} ${className || ""}`}>
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-sm text-[var(--blue-eclipse-2)]">{description}</p>
        <p className="text-sm text-[var(--blue-eclipse-2)]">
          {cleanTechStack ? `Tech stack : ${cleanTechStack}` : ``}
        </p>
        {image && (
          <Image
            width={400}
            height={800}
            src={image}
            alt={title}
            className="rounded-md"
          />
        )}
        {children}
      </article>
    </>
  );
}
