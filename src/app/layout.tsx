import type { Metadata } from "next";
import "./globals.scss";
import Sidebar from "@/containers/layout/Sidebar";
import Navbar from "@/containers/layout/Navbar";
import localFont from "next/font/local";

const myFont = localFont({ src: "../Satoshi-Variable.ttf" });

export const metadata: Metadata = {
  title: "MAPS",
  description: "Revolutionalizing healthcare",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main className={`layout ${myFont.className}`}>
          <Sidebar />
          <section className="content">
            <Navbar />
            {children}
          </section>
        </main>
      </body>
    </html>
  );
}
