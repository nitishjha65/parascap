import ClientWrapper from "@/components/ClientWrapper";
import "./globals.css";
import { Inter } from "next/font/google";
import { Toaster, toast } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Parascap ventures",
  description: `At Parascap Ventures we empower growth potential companies to scale
            into market leaders. Backed by sharp financial acumen and bold
            strategic thinking, we craft tailored solutions in IPO
            advisory,private equity,strategic financial advisory and investor
            relations, to unlock value and drive meaningful outcomes`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Toaster position="bottom-right" richColors />
      <html lang="en" suppressHydrationWarning>
        <body className={inter.className}>
          <ClientWrapper>{children}</ClientWrapper>
        </body>
      </html>
    </>
  );
}
