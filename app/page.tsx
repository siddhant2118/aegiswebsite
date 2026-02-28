import Link from "next/link";

export default function HomePage() {
  return (
    <main className="landing">
      <header className="nav">
        <div className="brand">AegisWebsite</div>
        <Link className="btn btn-ghost" href="/login">
          Login
        </Link>
      </header>

      <section className="hero">
        <p className="eyebrow">Consumer Preview</p>
        <h1>Female Physiology, Finally Measurable.</h1>
        <p>
          A cycle-aware companion that turns daily signals into personalized
          lifestyle guidance for sleep, stress, movement, and nutrition.
        </p>
        <div className="cta-row">
          <a className="btn" href="#waitlist">
            Join Waitlist
          </a>
          <a className="btn btn-ghost" href="#how-it-works">
            See How It Works
          </a>
        </div>
      </section>

      <section id="how-it-works" className="panel">
        <h2>How it works</h2>
        <ol>
          <li>Track daily signals and cycle context.</li>
          <li>Understand your baseline patterns over time.</li>
          <li>Act with practical, non-diagnostic daily guidance.</li>
        </ol>
      </section>

      <section id="waitlist" className="panel waitlist">
        <h2>Join the waitlist</h2>
        <p>Early access opens soon. Save your spot.</p>
        <form className="waitlist-form">
          <input type="email" placeholder="you@example.com" required />
          <button type="submit" className="btn">
            Reserve
          </button>
        </form>
      </section>
    </main>
  );
}
