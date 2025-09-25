import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ToastContainer } from "react-toastify";
import Providers from "@/app/redux/Providers";
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
  title: "Edulingo — Online Ta’lim Platformasi",
  description:
    "Edulingo orqali chet tillarini oson va qiziqarli tarzda o‘rganing. Zamonaviy kurslar, o‘qituvchilar va ta’lim resurslari bir joyda.",
  keywords: [
    "Edulingo",
    "til kurslari",
    "online ta’lim",
    "chet tili o‘rganish",
    "ingliz tili kurslari",
    "o‘zbekcha ta’lim platforma",
  ],
  authors: [{ name: "Edulingo Team" }],
  creator: "Edulingo",
  publisher: "Edulingo",
  metadataBase: new URL("https://edulingo.uz"), // domening
  alternates: {
    canonical: "https://edulingo.uz",
  },
  openGraph: {
    title: "Edulingo — Online Ta’lim Platformasi",
    description:
      "Chet tillarini oson va qiziqarli o‘rganish uchun Edulingo platformasidan foydalaning.",
    url: "https://edulingo.uz",
    siteName: "Edulingo",
    images: [
      {
        url: "/og-image.jpg", // public papkaga joylashtirasan
        width: 1200,
        height: 630,
        alt: "Edulingo platformasi",
      },
    ],
    locale: "uz_UZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Edulingo — Online Ta’lim Platformasi",
    description:
      "Zamonaviy kurslar orqali chet tillarini oson va samarali o‘rganing.",
    images: ["/og-image.jpg"],
    creator: "@edulingo", // agar Twitter akkaunt bo‘lsa
  },
  icons: {
    icon: "/icons/icon.svg",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uz">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          {children}
          <ToastContainer />
        </Providers>
      </body>
    </html>
  );
}
