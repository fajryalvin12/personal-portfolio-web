import Image from "next/image";

export default function Card({
  title,
  description,
  techStack,
  image,
  imageAlt,
  className,
  children,
}) {
  const cleanTechStack = techStack ? techStack.join(" • ").trim() : "";
  const baseStyle =
    "bg-[var(--blue-eclipse-1)] rounded-xl overflow-hidden flex flex-col shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 hover:scale-[1.02] shrink-0 border border-white/10 backdrop-blur-sm";

  return (
    <article className={`${baseStyle} ${className || ""}`}>
      {/* Thumbnail */}
      {image && (
        <div className="relative w-full aspect-video overflow-hidden bg-black/20">
          <Image
            src={image}
            alt={imageAlt || title || "Project screenshot"}
            fill
            className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, 50vw"
          />
        </div>
      )}

      {/* Content */}
      <div className="p-4 flex flex-col gap-3 flex-1">
        {title && <h3 className="text-base font-semibold leading-snug">{title}</h3>}
        {description && (
          <p className="text-sm text-[var(--blue-eclipse-2)] leading-relaxed flex-1">
            {description}
          </p>
        )}
        {cleanTechStack && (
          <div className="flex flex-wrap gap-1.5 mt-auto pt-1">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="text-xs px-2 py-0.5 rounded-full border border-white/15 text-[var(--blue-eclipse-2)]"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
        {children && <div className="pt-1">{children}</div>}
      </div>
    </article>
  );
}
