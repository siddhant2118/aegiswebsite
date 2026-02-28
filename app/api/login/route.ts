import { NextResponse } from "next/server";

const DEMO_EMAIL = "demo@aegis.com";
const DEMO_PASSWORD = "demo1234";

export async function POST(req: Request) {
  const body = (await req.json()) as { email?: string; password?: string };

  if (body.email !== DEMO_EMAIL || body.password !== DEMO_PASSWORD) {
    return NextResponse.json(
      { message: "Invalid credentials" },
      { status: 401 }
    );
  }

  const response = NextResponse.json({ ok: true });
  response.cookies.set("aegis_auth", "temp-authenticated", {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24,
    path: "/",
  });
  return response;
}
