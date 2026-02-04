import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Honey the Dog",
  description: "Chief Morale Officer and professional treat enthusiast.",
  icons: {
    icon: '/favicons/dog/icon-32.png',
    apple: '/favicons/dog/apple-icon-180.png',
    shortcut: '/favicons/dog/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} bg-bg text-gray-300 font-sans antialiased selection:bg-accent selection:text-bg overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
