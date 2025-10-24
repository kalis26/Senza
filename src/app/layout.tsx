import type { Metadata } from "next";
import "./globals.css";
import { Karla } from "@/app/fonts";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

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
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
