"use client";

import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "./navbar";
import { Footer } from "./Footer";

export default function ClientWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        {children}
      </ThemeProvider>
      <div className="bg-parascap-green">
        <Footer />
      </div>
    </>
  );
}
