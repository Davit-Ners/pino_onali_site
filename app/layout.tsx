import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import PageBackground from "./components/home/pageBackground/pageBackground";

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
      <body
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* <PageBackground src="/bg1.jpg" /> */}
        <Header />
        <main
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            position: "relative",
            zIndex: 1,
          }}
        >
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
