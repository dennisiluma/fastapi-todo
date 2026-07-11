import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/nav/Nav";
import Footer from "@/components/footer/Footer";


export const metadata: Metadata = {
  title: "Todo App",
  description: "A simple todo App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Nav />

        {children}


        <Footer />
      </body>
    </html>
  );
}
