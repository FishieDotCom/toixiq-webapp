import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// import { SDKProvider } from "@tma.js/sdk-react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Toxiq webapp",
  description: "Toxiq by Fishie",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {/* <SDKProvider> */}
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
      {/* </SDKProvider> */}
    </>
  );
}
