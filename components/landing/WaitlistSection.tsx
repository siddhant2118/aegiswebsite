"use client"

import { FormEvent, useState } from "react"

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function WaitlistSection() {
  const [email, setEmail] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const normalized = email.trim().toLowerCase()
    if (!normalized) {
      setError("Please enter your email.")
      return
    }

    if (!EMAIL_REGEX.test(normalized)) {
      setError("Please enter a valid email address.")
      return
    }

    setError(null)
    setSubmitted(true)
    setEmail("")
  }

  return (
    <section id="waitlist" className="landing-section landing-waitlist" aria-labelledby="waitlist-heading">
      <div className="landing-shell">
        <div className="landing-waitlist-card" data-reveal>
          <p className="landing-kicker">Early Access</p>
          <h2 id="waitlist-heading" className="landing-section-title">
            Join the waitlist for AegisCycle.
          </h2>
          <p className="landing-waitlist-copy">
            Be among the first to try personalized cycle-aware guidance built from wearable and lifestyle patterns.
          </p>

          <form className="landing-waitlist-form" onSubmit={handleSubmit} noValidate>
            <label htmlFor="waitlist-email" className="sr-only">
              Email address
            </label>
            <input
              id="waitlist-email"
              type="email"
              value={email}
              placeholder="Enter your email"
              autoComplete="email"
              aria-invalid={Boolean(error)}
              aria-describedby={error ? "waitlist-error" : undefined}
              onChange={(event) => {
                setEmail(event.target.value)
                if (error) setError(null)
              }}
            />
            <button type="submit" className="landing-btn landing-btn-primary" data-magnet>
              Join Waitlist
            </button>
          </form>

          {error ? (
            <p id="waitlist-error" className="landing-form-error" role="alert">
              {error}
            </p>
          ) : null}

          {submitted ? (
            <p className="landing-form-success" role="status" aria-live="polite">
              You’re on the list. We’ll notify you when early access opens.
            </p>
          ) : null}
        </div>
      </div>
    </section>
  )
}
