import React, { ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "components/Footer";


type Props = {
  children?: ReactNode;
  title?: string;
  description?: string;
  isHome?: boolean;
  social?: {
    instagram?: string;
    twitter?: string;
    email?: string;
  };
};

const Layout = ({
  children,
  title = "Brat Photography",
  description = "capturing unique moments in life",
  isHome = false,
  social,
}: Props) => (
  <div>
    <Head>
      <title>{isHome ? "Brat Photography" : `${title} | Brad Photography`}</title>
      <meta name="description" content={description}></meta>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
    </Head>
    {/* <Navbar /> */}
    {children}
    {/* <Footer /> */}

  </div>
)

export default Layout;
