import { ArrowRight, Sparkles, Waves } from "lucide-react"

export function HeroSection() {
  return (
    <section className="landing-hero" id="top">
      <div className="landing-hero-grid">
        <div className="landing-hero-copy">
          <p className="landing-kicker" data-hero-item>
            Consumer Beta · Cycle-Aware Daily Guidance
          </p>

          <h1 className="landing-hero-title" aria-label="Female Physiology, Finally Measurable.">
            <span data-hero-word>Female Physiology,</span>
            <span data-hero-word>Finally Measurable.</span>
          </h1>

          <p className="landing-hero-subcopy" data-hero-item>
            AegisCycle combines your wearable signals and everyday check-ins to deliver personalized guidance for sleep,
            stress, movement, nutrition, and symptom rhythms.
          </p>

          <div className="landing-hero-actions" data-hero-item>
            <a href="#waitlist" className="landing-btn landing-btn-primary" data-magnet>
              Join Waitlist
              <ArrowRight size={16} aria-hidden />
            </a>
            <a href="#how-it-works" className="landing-btn landing-btn-ghost">
              See How It Works
            </a>
          </div>

          <div className="landing-hero-facts" data-hero-item>
            <span>
              <Sparkles size={14} aria-hidden />
              Personalized to your baseline
            </span>
            <span>
              <Waves size={14} aria-hidden />
              Built for daily life, not one-off checkups
            </span>
          </div>
        </div>

        <div className="landing-hero-visual" data-parallax>
          <div className="landing-device-shell">
            <div className="landing-device-notch" />
            <div className="landing-device-screen">
              <p className="landing-device-kicker">Today&apos;s guidance</p>
              <h3>Recovery-first luteal phase</h3>
              <p>Sleep consistency + low-impact movement today to reduce tomorrow&apos;s symptom load.</p>

              <div className="landing-mini-chart" aria-hidden>
                <span />
              </div>

              <div className="landing-mini-cards">
                <article>
                  <strong>+2.1h</strong>
                  <p>Sleep trend this week</p>
                </article>
                <article>
                  <strong>Stable</strong>
                  <p>Stress-response pattern</p>
                </article>
              </div>
            </div>
          </div>

          <div className="landing-chip chip-a" data-float-chip>
            Cycle phase confidence 87%
          </div>
          <div className="landing-chip chip-b" data-float-chip>
            HRV baseline recalibrated
          </div>
          <div className="landing-chip chip-c" data-float-chip>
            Tomorrow: lighter training load
          </div>
        </div>
      </div>
    </section>
  )
}
