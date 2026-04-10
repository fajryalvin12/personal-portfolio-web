export default function Section({ children, title, className }) {
  return (
    <>
      <section className={`py-6 space-y-6 ${className || ""}`}>
        {title && (
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
            {title}
          </h2>
        )}
        {children}
      </section>
    </>
  );
}
