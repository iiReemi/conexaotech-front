import { Navigation } from "@/components/navigation";
import { ThemeProvider } from "@/components/theme-provider";
import { Inter } from "next/font/google";
import type React from "react";
import "./globals.css";

import Chat from "@/components/chat";
import EmojiReactions from "@/components/emoji-reactions";
import ReactionListener from "@/components/reaction-listener";
import { Toaster } from "sonner";

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
          <Toaster />
          <ReactionListener />
          <Chat />
          <EmojiReactions />
        </ThemeProvider>
      </body>
    </html>
  );
}
