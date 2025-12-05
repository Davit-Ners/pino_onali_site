import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { ADMIN_COOKIE, verifyAdminToken } from "@/app/lib/auth";

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  const isAdminPage = pathname.startsWith("/admin");
  const isLoginPage = pathname.startsWith("/admin/login");
  const isAdminApi = pathname.startsWith("/api/admin");
  const isGalleryApi = pathname.startsWith("/api/gallery");
  const isUploadApi = pathname.startsWith("/api/upload");

  const isProtectedApi =
    (isGalleryApi && req.method !== "GET") ||
    isUploadApi ||
    (isAdminApi && !pathname.startsWith("/api/admin/login"));

  if (!isAdminPage && !isProtectedApi) {
    return NextResponse.next();
  }

  const rawToken = req.cookies.get(ADMIN_COOKIE)?.value;
  let isAuthenticated = false;
  try {
    isAuthenticated = Boolean(await verifyAdminToken(rawToken));
  } catch (err) {
    console.error("ADMIN AUTH ERROR:", err);
    isAuthenticated = false;
  }

  if (isProtectedApi && !isAuthenticated) {
    const res = NextResponse.json({ error: "Non autorise." }, { status: 401 });
    res.cookies.set(ADMIN_COOKIE, "", {
      path: "/",
      expires: new Date(0),
      httpOnly: true,
      sameSite: "strict",
      secure: process.env.NODE_ENV === "production",
    });
    return res;
  }

  if (isLoginPage) {
    if (isAuthenticated) {
      const url = req.nextUrl.clone();
      url.pathname = "/admin";
      url.search = "";
      return NextResponse.redirect(url);
    }
    return NextResponse.next();
  }

  if (isAdminPage && !isAuthenticated) {
    const url = req.nextUrl.clone();
    url.pathname = "/admin/login";
    url.searchParams.set("from", pathname);
    const res = NextResponse.redirect(url);
    res.cookies.set(ADMIN_COOKIE, "", {
      path: "/",
      expires: new Date(0),
      httpOnly: true,
      sameSite: "strict",
      secure: process.env.NODE_ENV === "production",
    });
    return res;
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/admin/:path*",
    "/api/gallery/:path*",
    "/api/upload/:path*",
    "/api/admin/:path*",
  ],
};
