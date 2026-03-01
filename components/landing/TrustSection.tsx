const trustItems = [
  "Cycle-aware model logic from wearable and lifestyle signals",
  "Built for continuous daily use, not episodic check-ins",
  "Non-diagnostic guidance designed to support better decisions",
]

export function TrustSection() {
  return (
    <section className="landing-section landing-trust" aria-labelledby="trust-heading">
      <div className="landing-shell">
        <p className="landing-kicker" data-reveal>
          Built To Earn Trust
        </p>
        <h2 id="trust-heading" className="landing-section-title on-dark" data-reveal>
          Built for daily life. Built to compound over time.
        </h2>
        <p className="landing-trust-copy" data-reveal>
          AegisCycle helps you understand your own patterns and make better lifestyle decisions across your cycle. It is a
          support layer for self-management and clinician conversations, not a diagnostic device.
        </p>

        <div className="landing-trust-grid">
          {trustItems.map((item) => (
            <article key={item} className="landing-trust-chip" data-reveal>
              {item}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
