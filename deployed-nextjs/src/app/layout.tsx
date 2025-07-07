import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./main.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Deployed | Leading Software Company in USA",
  description: "We help startups and enterprises deploy scalable, secure, and impactful digital products.",
  keywords: "software development, web development, mobile apps, cloud solutions, AI, machine learning",
  authors: [{ name: "Deployed" }],
  creator: "Deployed",
  publisher: "Deployed",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://deployed.com"),
  openGraph: {
    title: "Deployed | Leading Software Company in USA",
    description: "We help startups and enterprises deploy scalable, secure, and impactful digital products.",
    url: "https://deployed.com",
    siteName: "Deployed",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Deployed | Leading Software Company in USA",
    description: "We help startups and enterprises deploy scalable, secure, and impactful digital products.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/images/deployed-logo-blur.png", sizes: "32x32", type: "image/png" },
      { url: "/images/deployed-logo-blur.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/images/deployed-logo-blur.png",
    shortcut: "/images/deployed-logo-blur.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script src="https://www.google.com/recaptcha/api.js" async defer></script>
      </head>
      <body className={`${inter.variable} antialiased`} suppressHydrationWarning={true}>
        <Navbar />
        {children}
        <Footer />
        <Link href="/contact" className="fixed-cta-button" id="fixedCtaButton">
          Let&apos;s Talk Business
        </Link>
      </body>
    </html>
  );
}
