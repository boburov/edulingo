"use client";
import { Roboto } from "next/font/google";
import "@/app/globals.css";
import { useSelector } from "react-redux";
import ValidationDirector from "./ValidationDirector";
import Header from "./(components)/Header";

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

  return (
    <>
      {!token && !validated ? (
        <ValidationDirector />
      ) : (
        <div className={`${roboto.className} antialiased`}>
          <Header />
          <main className="main_body py-5">{children}</main>
        </div>
      )}
    </>
  );
}
