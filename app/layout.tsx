import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import BodyWrapper from "./bodyWrapper";
import LanguageProvider from "./components/languageProvider/languageProvider";

export const metadata: Metadata = {
  metadataBase: new URL("https://pinoonali.com"),
  title: "Pino Onali",
  description: "Découvrez les œuvres lunaires et cosmiques de Pino Onali, artiste-peintre basé à Bruxelles.",
  keywords: [
    "artiste peintre Bruxelles",
    "peintre Avenue Louise",
    "œuvres d'art Bruxelles",
    "art contemporain Belgique",
    "Pino Onali"
  ],
  openGraph: {
    title: "Pino Onali – Artiste peintre",
    description: "Œuvres inspirées des astres, constellations et textures lunaires.",
    url: "https://pinoonali.com",
    siteName: "Pino Onali",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Œuvre de Pino Onali"
      }
    ],
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <LanguageProvider>
      <BodyWrapper>
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
      </BodyWrapper>
      </LanguageProvider>
    </html>
  );
};
