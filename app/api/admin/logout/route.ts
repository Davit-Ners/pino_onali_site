import { NextResponse } from "next/server";
import { ADMIN_COOKIE } from "@/app/lib/auth";

export async function POST() {
  const res = NextResponse.json({ ok: true });

  res.cookies.set(ADMIN_COOKIE, "", {
    path: "/",
    expires: new Date(0),
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
  });

  return res;
};
