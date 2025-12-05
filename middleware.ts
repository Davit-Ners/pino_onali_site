import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
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

  const adminCookie = req.cookies.get("pino_admin")?.value;
  const isAuthenticated = adminCookie === "1";

  if (isProtectedApi && !isAuthenticated) {
    return NextResponse.json({ error: "Non autorisÇ¸." }, { status: 401 });
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
    return NextResponse.redirect(url);
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
