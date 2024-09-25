import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import { Sen } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";


import { cn } from "@/lib/utils";
import { ThemeProvider }  from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "Home Axil",
  description: "An interior website",
};

const fontSans = FontSans({
  subsets: ["latin"],
  weight: ["100", "200", "400", "500", "700", "900"],
  variable: "--font-sans",
});

const Josef = Sen({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap"
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={Josef.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
