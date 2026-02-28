import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get("aegis_auth")?.value;

  if (token !== "temp-authenticated") {
    redirect("/login");
  }

  return (
    <main className="dashboard">
      <h1>Dashboard (Temporary Auth)</h1>
      <p>
        You are signed in with temporary auth. This is enough for Vercel demo and
        submission.
      </p>
      <form action="/api/logout" method="post">
        <button className="btn" type="submit">
          Logout
        </button>
      </form>
    </main>
  );
}
