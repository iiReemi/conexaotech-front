"use client";

import { EmojiClickData } from "emoji-picker-react";
import { MessageCircle, Send, Smile, X } from "lucide-react";
import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Input } from "./ui/input";

const EmojiPicker = dynamic(() => import("emoji-picker-react"), {
  ssr: false,
});

const socket = io(process.env.BACKEND);

interface ChatMessage {
  sender: string;
  senderId: string;
  message: string;
}

export default function Chat() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [username, setUsername] = useState("Anonimo");
  const [isEmojiPickerOpen, setIsEmojiPickerOpen] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const [myId, setMyId] = useState<string>("");

useEffect(() => {
  setMyId(crypto.randomUUID());
}, []);

  useEffect(() => {
    socket.on("message", (msg: ChatMessage) => {
      setMessages((prev) => [...prev, msg]);
    });

    return () => {
      socket.off("message");
    };
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = () => {
    const nickname = localStorage.getItem("nickname") || "Anonimo";
    setUsername(nickname);

    if (message.trim() && nickname.trim()) {
      const newMessage: ChatMessage = {
        sender: nickname,
        senderId: myId,
        message: message.trim(),
      };
      socket.emit("message", newMessage);
      setMessage("");
      setIsEmojiPickerOpen(false);
    }
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const onEmojiClick = (emojiData: EmojiClickData) => {
    setMessage((prev) => prev + emojiData.emoji);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isOpen && (
        <Button
          onClick={toggleChat}
          className="h-14 w-14 rounded-full shadow-lg bg-primary hover:bg-primary/90 hover:scale-105"
          aria-label="Abrir chat"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      )}

      {isOpen && (
        <Card className="w-80 sm:w-96 shadow-xl animate-in slide-in-from-bottom-10 duration-300 rounded-lg">
          <CardHeader className="rounded-t-lg p-4 bg-primary text-primary-foreground flex flex-col justify-between items-center">
            <div className="flex w-full justify-between">
              <span className="font-semibold text-left">
                Chat em tempo real
              </span>
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleChat}
                className="h-8 w-8 rounded-full text-primary-foreground hover:bg-primary/90"
                aria-label="Fechar chat"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>

          <CardContent className="p-0">
            <div className="h-[500px] overflow-y-auto p-4 bg-background">
              {messages.length === 0 ? (
                <p className="text-muted-foreground text-center py-2 text-xs">
                  Nenhuma mensagem ainda. Seja o primeiro a dizer olá!
                </p>
              ) : (
                messages.map((msg, index) => {
                  const isCurrentUser = msg.senderId === myId;
                  return (
                    <div
                      key={index}
                      className={`mb-3 ${
                        isCurrentUser ? "ml-auto w-fit" : "mr-auto max-w-[80%]"
                      }`}
                    >
                      <div
                        className={`p-2 rounded-lg text-sm ${
                          isCurrentUser
                            ? "bg-primary text-primary-foreground rounded-xl"
                            : "bg-[#f4f4f4] rounded-lg p-4"
                        }`}
                      >
                        <div className="flex flex-col gap-2">
                          {!isCurrentUser && (
                            <div className="flex flex-row gap-2">
                              <div className="rounded-full h-5 w-5 flex items-center justify-center">
                                <img src="/favicon.ico" alt="" />
                              </div>
                              <span className="text-xs font-semibold mb-1 ml-1">
                                {msg.sender}
                              </span>
                            </div>
                          )}
                          {msg.message}
                        </div>
                      </div>
                    </div>
                  );
                })
              )}
              <div ref={messagesEndRef} />
            </div>
            {isEmojiPickerOpen && (
              <div className="absolute bottom-14 right-4">
                <EmojiPicker onEmojiClick={onEmojiClick} />
              </div>
            )}
          </CardContent>

          <CardFooter className="p-3 border-t">
            <div className="flex gap-2 w-full">
              <Input
                className="flex-1"
                placeholder="Digite sua mensagem"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              />
              <Button
                onClick={() => setIsEmojiPickerOpen((prev) => !prev)}
                size="icon"
                variant="outline"
                aria-label="Abrir emojis"
              >
                <Smile className="h-4 w-4" />
              </Button>
              <Button
                onClick={sendMessage}
                size="icon"
                aria-label="Enviar mensagem"
                variant={"outline"}
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </CardFooter>
        </Card>
      )}
    </div>
  );
}
