import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "edulingo am",
  description: "edulingo - talim platformasi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
