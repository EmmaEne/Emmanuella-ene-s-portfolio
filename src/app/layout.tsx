import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Emmanuella Ene — Frontend Engineer",
  description:
    "Frontend engineer crafting premium digital experiences with precision, taste, and intentional design. 5+ years building products people trust.",
  keywords: [
    "frontend engineer",
    "web developer",
    "UI designer",
    "React developer",
    "Next.js",
    "portfolio",
  ],
  authors: [{ name: "Emmanuella Ene" }],
  openGraph: {
    title: "Emmanuella Ene — Frontend Engineer",
    description:
      "Crafting premium digital experiences with precision & taste.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Emmanuella Ene — Frontend Engineer",
    description:
      "Crafting premium digital experiences with precision & taste.",
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
      className="antialiased"
    >
      <body>{children}</body>
    </html>
  );
}
