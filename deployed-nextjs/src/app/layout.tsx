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
      { url: "/images/deployed-logo-blur.png", sizes: "48x48", type: "image/png" },
    ],
    apple: [
      { url: "/images/deployed-logo-blur.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/images/deployed-logo-blur.png",
    other: [
      { rel: "icon", url: "/images/deployed-logo-blur.png", type: "image/png" },
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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" href="/images/deployed-logo-blur.png" type="image/png" sizes="32x32" />
        <link rel="icon" href="/images/deployed-logo-blur.png" type="image/png" sizes="16x16" />
        <link rel="apple-touch-icon" href="/images/deployed-logo-blur.png" />
        <link rel="shortcut icon" href="/images/deployed-logo-blur.png" type="image/png" />
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
