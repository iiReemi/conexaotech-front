import type React from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navigation } from "@/components/navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Frontend além da tela. A arte de criar experiências visuais",
  description: "Uma apresentação sobre conceitos fundamentais de frontend",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navigation />
          {children}
          <ReactionListener />
          <EmojiReactions />
        </ThemeProvider>
      </body>
    </html>
  );
}

import "./globals.css";
import EmojiReactions from "@/components/emoji-reactions";
import ReactionListener from "@/components/reaction-listener";
