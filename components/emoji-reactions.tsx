"use client";

import { Heart, Smile } from "lucide-react";
import { ReactNode, useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";
import { Button } from "./ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

const socket = io(process.env.BACKEND);

interface EmojiReaction {
  type: string;
  emoji: string | ReactNode;
  label: string;
}

export default function EmojiReactions() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const reactions: EmojiReaction[] = [
    {
      type: "heart",
      emoji: <Heart className="fill-red-500 text-red-500" />,
      label: "Coração",
    },
    {
      type: "clap",
      emoji: "👏",
      label: "Palmas",
    },
    {
      type: "confetti",
      emoji: "🎉",
      label: "Confetes",
    },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const sendReaction = (reaction: EmojiReaction) => {
    socket.emit("reaction", {
      type: reaction.type,
    });

    setIsOpen(true);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (typeof window !== "undefined") {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      if (typeof window !== "undefined") {
        document.removeEventListener("mousedown", handleClickOutside);
      }
    };
  }, []);

  return (
    <div className="fixed bottom-4 left-4 z-50">
      {/* Botão principal para abrir o menu de reações */}
      <Button
        onClick={toggleMenu}
        className="h-14 w-14 rounded-full shadow-lg bg-primary hover:bg-primary/90 hover:scale-105 transition-all"
        aria-label="Reações rápidas"
      >
        <Smile className="h-6 w-6" />
      </Button>

      {/* Menu de reações */}
      {isOpen && (
        <div
          ref={menuRef}
          className="absolute bottom-20 left-0 bg-background rounded-full shadow-xl p-2 animate-in slide-in-from-bottom-5 duration-200"
        >
          <TooltipProvider>
            <div className="flex space-x-2">
              {reactions.map((reaction) => (
                <Tooltip key={reaction.type}>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-12 w-12 rounded-full hover:bg-muted transition-all hover:scale-110"
                      onClick={() => sendReaction(reaction)}
                    >
                      {reaction.emoji}
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{reaction.label}</p>
                  </TooltipContent>
                </Tooltip>
              ))}
            </div>
          </TooltipProvider>
        </div>
      )}
    </div>
  );
}
