import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const redirectUrl = new URL("/", req.url);
  const response = NextResponse.redirect(redirectUrl);

  response.cookies.set("aegis_auth", "", {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    maxAge: 0,
    path: "/",
  });

  return response;
}
