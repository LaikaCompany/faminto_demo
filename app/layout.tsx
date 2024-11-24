'use client'
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import TopBar from "./components/molecules/TopBar";
import { OrderCarContextProvider } from "./context/OrderCar";
import { Suspense } from "react";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Suspense>
        <OrderCarContextProvider>
          {children}
        </OrderCarContextProvider>
        </Suspense>
        
      </body>
    </html>
  );
}
