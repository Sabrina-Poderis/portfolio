import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LocaleEnum from "@/ts/enums/LocalesEnum";

export async function generateStaticParams() {
  return Object.values(LocaleEnum).map((lang) => ({ lang }));
}

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sabrina Poderis",
  description: "Meu portfólio pessoal desenvolvido com React, Next e TailwindCSS",
};

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: LocaleEnum }>
}>) {
  return (
    <html lang={(await params).lang}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
