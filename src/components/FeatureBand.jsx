export function FeatureBand({ children, className = "" }) {
  return (
    <section
      className={`w-full ${className}`}
      style={{ background: "var(--house)", color: "var(--on-dark)" }}
    >
      <div className="max-w-[1440px] mx-auto px-4 md:px-6 lg:px-10 py-16 md:py-20">
        {children}
      </div>
    </section>
  );
}
