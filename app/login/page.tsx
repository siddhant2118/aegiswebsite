"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("demo@aegis.com");
  const [password, setPassword] = useState("demo1234");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    setLoading(false);

    if (!res.ok) {
      const data = (await res.json()) as { message?: string };
      setError(data.message ?? "Login failed");
      return;
    }

    router.push("/dashboard");
  }

  return (
    <main className="auth-shell">
      <Link href="/" className="back-link">
        Back to landing
      </Link>
      <section className="auth-card">
        <h1>Temporary Login</h1>
        <p>Use this temporary account while the full auth stack is in progress.</p>
        <form onSubmit={onSubmit} className="auth-form">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {error ? <p className="error">{error}</p> : null}

          <button disabled={loading} type="submit" className="btn">
            {loading ? "Signing in..." : "Sign in"}
          </button>
        </form>
        <p className="helper">Demo credentials: demo@aegis.com / demo1234</p>
      </section>
    </main>
  );
}
