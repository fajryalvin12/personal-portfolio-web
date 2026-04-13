export default function Container({ children, className }) {
  return (
    <>
      <div
        className={`md:max-w-5xl mx-auto px-6 tracking-tight
leading-relaxed ${className || ""}`}
      >
        {children}
      </div>
    </>
  );
}
