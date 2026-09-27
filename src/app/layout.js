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

export const metadata = {
  title: "Peramedia — Software that moves business forward",
  description:
    "Peramedia builds custom digital products for growing businesses: web applications, dashboards, customer portals, automation, and AI-powered tools.",
  openGraph: {
    title: "Peramedia — Software that moves business forward",
    description:
      "Custom digital products for businesses ready to move beyond spreadsheets, manual work, and off-the-shelf tools.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
