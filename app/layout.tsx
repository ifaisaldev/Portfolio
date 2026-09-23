import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Faisal Mehmood - Senior Backend Engineer",
    template: "%s | Faisal Mehmood"
  },
  description: "Senior Backend Engineer specializing in Node.js, NestJS, Next.js, Python and WordPress. Builds APIs, data sync engines and CMS platforms for e-commerce, media and SaaS teams. Remote, available across all time zones.",
  keywords: [
    "Senior Backend Engineer",
    "Backend Engineer",
    "Full Stack Engineer",
    "Senior Software Engineer",
    "Node.js Developer",
    "Next.js Expert",
    "Python Developer",
    "WordPress Developer",
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
