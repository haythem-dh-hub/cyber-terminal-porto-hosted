import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "Haythem d. | Portfolio",
  description: "Senior Web3 Developer's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${jetbrainsMono.variable} font-mono antialiased selection:bg-terminal-green/30 selection:text-terminal-green`}>
        <div className="scanlines" />
        <div className="grid-bg" />
        <div className="fixed inset-0 bg-[#050505] -z-20" />
        
        {/* Animated matrix/glow effects */}
        <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] bg-terminal-green/5 blur-[120px] rounded-full animate-pulse-glow" />
        <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-terminal-cyan/5 blur-[120px] rounded-full animate-pulse-glow" style={{ animationDelay: '1s' }} />

        <main className="relative z-10 min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
