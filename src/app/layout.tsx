import type { Metadata } from "next";
import { outfit } from "./fonts";

import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Web Developer in Winnipeg | Chi Kin Lee",
  description:
    "Professional web developer based in Winnipeg specializing in web technologies like React, Next.js, Ruby on Rails, PHP and Node.js.",
  keywords:
    "Web Developer, Winnipeg, Software Developer, React, Next.js, Freelance Developer",
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased bg-primary ${outfit.className}`}>
        <main className="flex flex-col justify-center items-center w-full text-third pt-14">
          <Navbar></Navbar>
          {children}
          <Footer></Footer>
        </main>
      </body>
    </html>
  );
}
