import type { Metadata } from "next";
import "./globals.css";
import { Karla } from "@/app/fonts";

export const metadata: Metadata = {
  title: "SENZA - Maison de parfums",
  description: "SENZA, redéfinir l’élégance à travers le parfum.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${Karla.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
