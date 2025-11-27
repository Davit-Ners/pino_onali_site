import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";

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
        <Header />
        <main style={{ 
          // paddingTop: "100px",
          // flex: 1
        }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
