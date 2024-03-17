import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";
import "./globals.css";
import { ReactElement, ReactNode } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gaumart",
  description: "GAUMART Traiteur de Réception",
};

type LinkParameter = {
  link: string | null;
  text: string | ReactNode;
};

function Link(fn: LinkParameter): ReactElement {
  let link = (fn.link ? fn.link : "/");
  return (
    <a href={link} className="link">{fn.text}</a>
  );
}

function Header(): ReactElement {
  return (
    <>
      <header className="flex flex-row flex-nowrap px-6 justify-between">
        <a href="/">
          <div className="flex flex-row items-start no-underline">
            <Image src="/logo_gaumart.png" alt="logo Gaumart" width={100} height={100} />
            <h1 className="text-center m-0 self-center"><span className="text-orange-500">Gaumart</span><br />Traiteur paris</h1>
          </div>
        </a>
        <nav className="flex flex-row flex-nowrap self-center">
          <Link link="" text="Petit déjeuner" />
          <Link link="" text="Plateau repas" />
          <Link link="" text="Buffets" />
          <Link link="" text="Cocktails" />
          <Link link="" text="Menus" />
          <Link link="/contact" text="Nous contacter" />
        </nav>
      </header>
    </>
  );
}

function Footer(): ReactElement {
  return (
    <>
      <footer className="flex flex-col flex-nowrap items-center p-4">
        <h4>-Gaumart Traiteur Paris-</h4>
        <div className="footer-link">
          <Link link="" text={<small>Mentions légales</small>} />
          <small>|</small>
          <Link link="" text={<small>Gateartproject @2015</small>} />
        </div>
      </footer>
    </>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
