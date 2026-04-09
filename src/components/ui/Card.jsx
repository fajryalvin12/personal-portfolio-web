export default function Card({
  title,
  description,
  techStack,
  link,
  image,
  children,
}) {
  const cleanTechStack = techStack.join(" • ").trim();
  return (
    <>
      <article className="bg-[var(--blue-eclipse-1)] rounded-xl p-4 flex flex-col gap-4 shadow-md hover:shadow-lg transition hover:scale-[1.02]">
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-sm text-[var(--blue-eclipse-2)]">{description}</p>
        <p className="text-sm text-[var(--blue-eclipse-2)]">
          Tech stack : {cleanTechStack}
        </p>
        {image && <img src={image} alt={title} />}
        {children}
      </article>
    </>
  );
}
