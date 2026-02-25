import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ansh Kumar Pandey | Full Stack Developer & AI/ML Engineer",
  description:
    "Portfolio of Ansh Kumar Pandey – Full Stack Developer and AI/ML Engineer specializing in intelligent systems, scalable web applications, Flutter, Node.js, Python, and real-time architectures. Based in Noida, India.",
  keywords: [
    "Ansh Kumar Pandey",
    "Full Stack Developer",
    "AI ML Engineer",
    "Flutter Developer",
    "Node.js",
    "Python",
    "Machine Learning",
    "Portfolio",
    "Noida",
    "India",
  ],
  authors: [{ name: "Ansh Kumar Pandey" }],
  openGraph: {
    title: "Ansh Kumar Pandey | Full Stack Developer & AI/ML Engineer",
    description:
      "Building intelligent systems & scalable web applications. Expert in Flutter, Node.js, Python, ML.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ansh Kumar Pandey | Full Stack Developer & AI/ML Engineer",
    description: "Building intelligent systems & scalable web applications.",
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
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600&family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
