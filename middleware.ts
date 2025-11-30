import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  const isAdminRoute = pathname.startsWith("/admin");
  const isLoginPage = pathname.startsWith("/admin/login");
  const isProtectedApi =
    pathname.startsWith("/api/artworks") &&
    req.method !== "GET";

  // Si ce n'est ni une route admin, ni une API protégée → laisser passer
  if (!isAdminRoute && !isProtectedApi) {
    return NextResponse.next();
  }

  const adminCookie = req.cookies.get("pino_admin")?.value;
  const isAuthenticated = adminCookie === "1";

  // Routes API protégées
  if (isProtectedApi && !isAuthenticated) {
    return NextResponse.json(
      { error: "Non autorisé." },
      { status: 401 }
    );
  }

  // /admin/login reste accessible même si pas loggé
  if (isLoginPage) {
    // Si déjà loggé et on va sur /admin/login → redirige sur /admin
    if (isAuthenticated) {
      const url = req.nextUrl.clone();
      url.pathname = "/admin";
      url.search = "";
      return NextResponse.redirect(url);
    }
    return NextResponse.next();
  }

  // Autres pages /admin → besoin d'être loggé
  if (isAdminRoute && !isAuthenticated) {
    const url = req.nextUrl.clone();
    url.pathname = "/admin/login";
    url.searchParams.set("from", pathname);
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/api/artworks/:path*"],
};
