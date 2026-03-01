import { HeartPulse, Route, Sparkle } from "lucide-react"

const steps = [
  {
    title: "Track",
    body: "Capture wearable signals and simple daily logs across your cycle in under a minute.",
    icon: HeartPulse,
  },
  {
    title: "Understand",
    body: "Build a personal baseline so your data is interpreted against your physiology, not a generic average.",
    icon: Route,
  },
  {
    title: "Act",
    body: "Get cycle-aware lifestyle actions for sleep, stress, nutrition, movement, and symptom timing.",
    icon: Sparkle,
  },
]

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="landing-section landing-how" aria-labelledby="how-heading">
      <div className="landing-shell">
        <p className="landing-kicker" data-reveal>
          How It Works
        </p>
        <h2 id="how-heading" className="landing-section-title" data-reveal>
          One continuous loop, designed for real life.
        </h2>

        <div className="landing-step-grid">
          {steps.map((step, index) => (
            <article key={step.title} className="landing-step-card" data-reveal>
              <div className="landing-step-top">
                <span className="landing-step-index">0{index + 1}</span>
                <step.icon size={18} aria-hidden />
              </div>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
