import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SITE_DESCRIPTION, SITE_TITLE, SITE_URL, personJsonLd } from "@/lib/site";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  themeColor: "#f8fafc",
};

// Runs before first paint: light is the default; only a saved "dark" choice switches it.
const themeScript = `(function(){try{if(localStorage.getItem('theme')==='dark'){document.documentElement.classList.add('dark');document.addEventListener('DOMContentLoaded',function(){var m=document.querySelector('meta[name="theme-color"]');if(m)m.setAttribute('content','#0f172a');});}}catch(e){}})();`;

export const metadata: Metadata = {
  title: {
    default: SITE_TITLE,
    template: "%s | Faisal Mehmood"
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "Faisal Mehmood",
    "Senior Backend Engineer",
    "Backend Engineer",
    "Remote Backend Engineer",
    "Node.js Developer",
    "NestJS Developer",
    "Next.js Developer",
    "Python Developer",
    "FastAPI Developer",
    "WordPress Developer",
    "Full Stack Engineer",
    "TypeScript",
    "PostgreSQL",
    "Headless CMS",
    "Nextly CMS"
  ],
  authors: [{ name: "Faisal Mehmood", url: SITE_URL }],
  creator: "Faisal Mehmood",
  publisher: "Faisal Mehmood",
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "Faisal Mehmood - Senior Backend Engineer",
    description: "Senior Backend Engineer specializing in Node.js, NestJS, Next.js, Python and WordPress.",
    siteName: "Faisal Mehmood Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Faisal Mehmood - Senior Backend Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Faisal Mehmood - Senior Backend Engineer",
    description: "Senior Backend Engineer specializing in Node.js, NestJS, Next.js, Python and WordPress.",
    creator: "@ifaisaldev",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className={inter.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c") }}
        />
        <Navbar />
        <main className="min-h-screen pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
