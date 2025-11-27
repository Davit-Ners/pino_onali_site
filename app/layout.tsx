import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pino Onali",
  description: "Site vitrine pour l'artiste peintre Pino Onali.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
        {children}
      </body>
    </html>
  );
}
