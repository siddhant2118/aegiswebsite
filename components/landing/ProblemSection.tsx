import { Activity, CalendarClock, LineChart } from "lucide-react"

const problemPoints = [
  {
    icon: Activity,
    title: "Cycle-blind wearables",
    body: "Most wearables score stress and recovery without understanding where you are in your cycle.",
  },
  {
    icon: CalendarClock,
    title: "Calendar-only apps",
    body: "Most period apps rely on logging memory and date averages, not your underlying physiology.",
  },
  {
    icon: LineChart,
    title: "No longitudinal view",
    body: "You need month-over-month pattern intelligence, not isolated snapshots from one appointment.",
  },
]

export function ProblemSection() {
  return (
    <section className="landing-section landing-problem" aria-labelledby="problem-heading">
      <div className="landing-shell">
        <p className="landing-kicker" data-reveal>
          Why Existing Tools Miss The Mark
        </p>
        <h2 id="problem-heading" className="landing-section-title" data-reveal>
          Reproductive health is dynamic. Most products still treat it as static.
        </h2>

        <div className="landing-problem-grid">
          {problemPoints.map((point) => (
            <article key={point.title} className="landing-problem-card" data-reveal>
              <point.icon size={20} aria-hidden />
              <h3>{point.title}</h3>
              <p>{point.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
