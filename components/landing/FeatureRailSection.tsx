const features = [
  {
    title: "Cycle-aware insights",
    body: "Interpret daily trends with menstrual phase context, not generic wellness scores.",
    tag: "Context",
  },
  {
    title: "Symptom trend mapping",
    body: "See how sleep, stress, and symptoms move together over weeks and months.",
    tag: "Patterns",
  },
  {
    title: "Wearable + check-in fusion",
    body: "Combine passive biometrics and quick logs for a clearer day-to-day signal.",
    tag: "Signals",
  },
  {
    title: "Readiness planning",
    body: "Plan training and workload around your current cycle state and recovery profile.",
    tag: "Planning",
  },
  {
    title: "Clinician-ready summaries",
    body: "Bring organized trends to appointments for more informed conversations.",
    tag: "Support",
  },
]

export function FeatureRailSection() {
  return (
    <section id="features" className="landing-feature-section" data-feature-section aria-labelledby="features-heading">
      <div className="landing-shell landing-feature-header" data-feature-header>
        <p className="landing-kicker" data-reveal>
          Product Experience
        </p>
        <h2 id="features-heading" className="landing-section-title on-dark" data-reveal>
          Daily guidance that gets sharper with your own data.
        </h2>
      </div>

      <div className="landing-feature-viewport" data-feature-viewport>
        <div className="landing-feature-track" data-feature-track>
          {features.map((feature) => (
            <article key={feature.title} className="landing-feature-card" data-feature-card>
              <span>{feature.tag}</span>
              <h3>{feature.title}</h3>
              <p>{feature.body}</p>
              <div className="landing-feature-line" aria-hidden />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
