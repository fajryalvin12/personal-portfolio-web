import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";
import Navbar from "@/components/layout/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Fajry Alvin Hidayat | Fullstack Web Developer",
  description:
    "Portfolio Fajry Alvin Hidayat — Fullstack Web Developer spesialis React.js, Next.js, Go, dan PHP.",
  openGraph: {
    title: "Fajry Alvin Hidayat | Fullstack Web Developer",
    description:
      "Fullstack Web Developer dengan pengalaman membangun aplikasi web skala pemerintahan dan swasta.",
    url: "https://personal-portfolio-web-taupe.vercel.app",
    siteName: "Fajry Alvin Portfolio",
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
