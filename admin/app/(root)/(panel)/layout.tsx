"use client";
import { Roboto } from "next/font/google";
import "@/app/globals.css";
import { useSelector } from "react-redux";
import ValidationDirector from "./ValidationDirector";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { token, validated } = useSelector((state: any) => state.admin);

  if (!token && !validated) {
    <ValidationDirector />;
  } else {
    return (
      <div className={`${roboto.className} antialiased`}>
        <main className="main_body">{children}</main>
      </div>
    );
  }
}
