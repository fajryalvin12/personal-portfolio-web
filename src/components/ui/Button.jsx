export default function Button({ variant, size, children }) {
  let style = "rounded-md transition cursor-pointer";

  // Variant Mapping
  const primary = "bg-[var(--blue-eclipse-4)] text-white";
  const outline =
    "border border-[var(--blue-eclipse-4)] text-[var(--blue-eclipse-4)]";
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
  const small = "px-3 py-1 text-sm";
  const medium = "px-4 py-2 text-base";
  const large = "px-6 py-3 text-lg";

  switch (size) {
    case "small":
      style += " " + small;
      break;
    case "medium":
      style += " " + medium;
      break;
    case "large":
      style += " " + large;
      break;
    default:
      style += " " + medium;
  }

  return <button className={style}>{children}</button>;
}
