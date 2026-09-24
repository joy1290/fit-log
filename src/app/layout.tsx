import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "react-hot-toast";

import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import { FitLogProvider } from "@/context/FitLogContext";

export const metadata: Metadata = {
  title: "FitLog - Workout Library",
  description: "Train with intent. Log every set.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#0b0d0f] text-white antialiased">
        <FitLogProvider>
          <Navbar />

          <main className="min-h-screen">
            {children}
          </main>

          <Footer />
          <Toaster position="top-right" />
        </FitLogProvider>
      </body>
    </html>
  );
}