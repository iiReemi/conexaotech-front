"use client";

import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function Nickname() {
  const [nickname, setNickname] = useState("");
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    
    const storedNickname = localStorage.getItem("nickname");
    if (!storedNickname) {
      setShowModal(true);
    }
  }, []);

  const saveNickname = () => {
    if (typeof window === "undefined") return;
    
    if (nickname.trim()) {
      localStorage.setItem("nickname", nickname.trim());
      setShowModal(false);
    }
  };

  if (!showModal) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-white dark:bg-zinc-900 p-6 rounded-lg shadow-lg flex flex-col gap-4 w-[90%] max-w-sm">
        <h2 className="font-semibold text-lg">Digite seu nome e sobrenome</h2>
        <Input
          placeholder="Nome e sobrenome"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
        />
        <Button onClick={saveNickname}>Salvar</Button>
      </div>
    </div>
  );
}
