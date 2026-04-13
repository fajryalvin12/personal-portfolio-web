export default function Button({ variant, size, children, isBadge, ...props }) {
  let style = "h-full rounded-md transition cursor-pointer";

  // Variant Mapping
  const primary =
    "bg-[var(--blue-eclipse-4)] text-white hover:text-[var(--blue-eclipse-3)] hover:bg-white hover:border-[var(--blue-eclipse-3)] border";
  const outline =
    "bg-white border border-[var(--blue-eclipse-4)] text-[var(--blue-eclipse-4)] hover:bg-[var(--blue-eclipse-3)] hover:text-white";

  switch (variant) {
    case "primary":
      style += " " + primary;
      break;
    case "outline":
      style += " " + outline;
      break;
    default:
      style = primary;
  }

  // Size Mapping
  const sm = "px-3 py-1 text-sm";
  const md = "px-4 py-2 text-base";
  const lg = "px-6 py-3 text-lg";

  switch (size) {
    case "sm":
      style += " " + sm;
      break;
    case "md":
      style += " " + md;
      break;
    case "lg":
      style += " " + lg;
      break;
    default:
      style += " " + md;
  }

  if (isBadge) style += " " + "max-w-[125px]";

  return (
    <button type="button" className={style} {...props}>
      {children}
    </button>
  );
}
