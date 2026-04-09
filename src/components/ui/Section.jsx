export default function Section({ children, title, className }) {
  return (
    <>
      <section className={`py-12 space-y-6 ${className || ""}`}>
        {title && <h2 className="text-2xl font-bold text-center">{title}</h2>}
        {children}
      </section>
    </>
  );
}
