import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Faisal Mehmood - Senior Full Stack Engineer",
    template: "%s | Faisal Mehmood"
  },
  description: "Senior Full Stack Engineer specializing in scalable architectures, Node.js, Next.js, Python, and modern web technologies. Expert in building high-performance applications with focus on E-Commerce, FinTech, and Enterprise SaaS.",
  keywords: [
    "Full Stack Engineer",
    "Senior Software Engineer",
    "Node.js Developer",
    "Next.js Expert",
    "Python Developer",
    "React Developer",
    "TypeScript",
    "Scalable Architecture",
    "E-Commerce Development",
    "FinTech Solutions",
    "Enterprise SaaS",
    "Web Development",
    "Software Engineering",
    "Faisal Mehmood"
  ],
  authors: [{ name: "Faisal Mehmood" }],
  creator: "Faisal Mehmood",
  publisher: "Faisal Mehmood",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://faisalmehmood.tech'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "Faisal Mehmood - Senior Full Stack Engineer",
    description: "Senior Full Stack Engineer specializing in scalable architectures, Node.js, Next.js, Python, and modern web technologies.",
    siteName: "Faisal Mehmood Portfolio",
    images: [
      {
        url: "/hero-banner.png",
        width: 1200,
        height: 630,
        alt: "Faisal Mehmood - Senior Full Stack Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Faisal Mehmood - Senior Full Stack Engineer",
    description: "Senior Full Stack Engineer specializing in scalable architectures, Node.js, Next.js, Python, and modern web technologies.",
    creator: "@ifaisaldev",
    images: ["/hero-banner.png"],
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
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
