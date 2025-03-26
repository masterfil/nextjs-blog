import type { Metadata } from "next";
import {
  Geist_Mono,
  Roboto_Mono,
  Noto_Sans_Mono,
  Red_Hat_Mono,
} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

const notoSansMono = Noto_Sans_Mono({
  variable: "--font-noto-sans-mono",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const redHatsMono = Red_Hat_Mono({
  variable: "--font-noto-red-hat-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${robotoMono.variable} ${notoSansMono.variable} ${geistMono.variable} ${redHatsMono.variable}`}
      suppressHydrationWarning
    >
      <body className={`flex min-h-screen flex-col antialiased`}>
        <ThemeProvider>
          <Navbar />
          <main className="baseContainer grow py-6">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
