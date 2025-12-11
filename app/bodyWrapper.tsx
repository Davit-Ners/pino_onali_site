"use client";

import { usePathname } from "next/navigation";
import { ReactNode } from "react";

export default function BodyWrapper({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  let bgClass = "bg-home";
  if (pathname.startsWith("/galerie")) bgClass = "bg-galerie";
  else if (pathname.startsWith("/about")) bgClass = "bg-about";
  else if (pathname.startsWith("/contact")) bgClass = "bg-contact";
  else if (pathname.startsWith("/legal")) bgClass = "bg-legal";
  else if (pathname.startsWith("/admin")) bgClass = "bg-admin";

  return <body className={bgClass}>{children}</body>;
};
