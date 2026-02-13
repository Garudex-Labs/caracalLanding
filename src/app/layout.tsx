import type { Metadata } from "next";
import "./globals.css";
import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
import ErrorReporter from "@/components/ErrorReporter";
import { Toaster } from "@/components/ui/sonner";
import { Providers } from "@/components/Providers";

export const metadata: Metadata = {
  title: "Caracal",
  description: "Economic Infrastructure for Agents",
  icons: {
    icon: "/garudex.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Providers>
          <ErrorReporter />
          {children}
          <Toaster />
          <VisualEditsMessenger />
        </Providers>
      </body>
    </html>
  );
}
