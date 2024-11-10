'use client'
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import TopBar from "./components/molecules/TopBar";
import { OrderCarContextProvider } from "./context/OrderCar";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <OrderCarContextProvider>
          {children}
        </OrderCarContextProvider>
        
      </body>
    </html>
  );
}
