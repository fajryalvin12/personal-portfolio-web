import Image from "next/image";

export default function Card({
  title,
  description,
  techStack,
  className,
  children,
}) {
  const cleanTechStack = techStack ? techStack.join(" • ").trim() : "";
  const baseStyle =
    "bg-[var(--blue-eclipse-1)] rounded-xl p-4 flex flex-col gap-4 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 hover:scale-[1.02] shrink-0 border border-white/10 backdrop-blur-sm";

  return (
    <article className={`${baseStyle} ${className || ""}`}>
      {title && <h3 className="text-lg font-semibold">{title}</h3>}
      {description && (
        <p className="text-sm text-[var(--blue-eclipse-2)]">{description}</p>
      )}
      {cleanTechStack && (
        <p className="text-sm text-[var(--blue-eclipse-2)]">
          Tech stack: {cleanTechStack}
        </p>
      )}
      {children}
    </article>
  );
}
