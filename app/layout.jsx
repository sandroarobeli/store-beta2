import { Orbitron } from "@next/font/google";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StoreProvider from "@/components/StoreProvider";
import SessionProvider from "@/components/SessionProvider";
import "./globals.css";

// If loading VARIABLE font, no need to specify the font weight
export const orbitron = Orbitron({
  variable: "--font-orbitron",
});

// Container sets this: sm (640px)	max-width: 640px;
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${orbitron.variable}`}>
      <head />
      <body className="flex flex-col justify-between min-h-screen">
        <SessionProvider>
          <StoreProvider>
            <Header />
            {children}
            <Footer />
          </StoreProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
