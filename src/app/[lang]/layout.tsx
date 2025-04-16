import { locales } from "@/middleware";
import "./globals.css";
import { Navbar } from "@/components/ui/navbar/Navbar";
import { ReactNode } from "react";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html suppressHydrationWarning>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
