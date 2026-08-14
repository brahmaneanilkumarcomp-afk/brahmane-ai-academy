import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://brahmane-ai-academy.vercel.app"),

  title: {
    default: "Brahmane AI Academy | AI & Machine Learning",
    template: "%s | Brahmane AI Academy",
  },

  description:
    "Brahmane AI Academy provides learning resources, notes, practical materials, and study content for Artificial Intelligence, Machine Learning, Agentic AI, and related technologies.",

  keywords: [
    "Brahmane AI Academy",
    "Artificial Intelligence",
    "Machine Learning",
    "Agentic AI",
    "AI Learning",
    "Machine Learning Resources",
    "AI Notes",
    "Machine Learning Notes",
    "AI Education",
  ],

  authors: [
    {
      name: "Dr. Anilkumar Vishwanath Brahmane",
    },
  ],

  creator: "Dr. Anilkumar Vishwanath Brahmane",
  publisher: "Brahmane AI Academy",

  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Brahmane AI Academy",
    title: "Brahmane AI Academy | AI & Machine Learning",
    description:
      "Learning resources, notes, practical materials, and study content for Artificial Intelligence, Machine Learning, Agentic AI, and related technologies.",
  },

  twitter: {
    card: "summary_large_image",
    title: "Brahmane AI Academy | AI & Machine Learning",
    description:
      "Learning resources, notes, practical materials, and study content for Artificial Intelligence, Machine Learning, Agentic AI, and related technologies.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}