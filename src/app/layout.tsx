import type { Metadata } from "next";
import {
  Inter,
  Instrument_Serif,
  Geist_Mono,
  Source_Serif_4,
} from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-serif",
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Text serif for long-form essays set on paper. Instrument Serif is a display
// face and gets tiring past a few lines; this one is built for running text.
const sourceSerif = Source_Serif_4({
  variable: "--font-text-serif",
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const SITE_DESCRIPTION =
  "We build products that fix things people stopped expecting to get fixed. No courses. No explanations. No consulting decks. We ship and it works.";

export const metadata: Metadata = {
  // Required for Next to emit absolute og:image URLs. Without it every card
  // resolves relative and scrapers show a blank placeholder.
  metadataBase: new URL("https://kerzie.ai"),
  title: "Kerzie AI",
  description: SITE_DESCRIPTION,
  // Site-wide fallback card. Any page that does not set its own og:image
  // inherits this instead of rendering blank.
  openGraph: {
    type: "website",
    siteName: "Kerzie AI",
    title: "Kerzie AI",
    description: SITE_DESCRIPTION,
    url: "https://kerzie.ai",
    images: [
      {
        url: "/og/default.jpg",
        width: 1200,
        height: 630,
        alt: "Three people working together at one laptop at a kitchen table.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kerzie AI",
    description: SITE_DESCRIPTION,
    images: ["/og/default.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${instrumentSerif.variable} ${geistMono.variable} ${sourceSerif.variable} antialiased`}
      >
        <Header />
        <main className="pt-14 lg:pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
