import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Navbar from "./components/Navbar";
import BottomBar from "./components/BottomBar";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
        >
          <Navbar/>
          <div className="px-5 py-5 ml-[20px] mr-[20px] mt-[68px] mb-[68px] overflow-y-auto md:overflow-y-hidden">
            {children}
          </div>
          <BottomBar/>
        </ThemeProvider>
      </body>
    </html>
  );
}
