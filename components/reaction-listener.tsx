"use client";

import { useEffect, useState } from "react";
import { io } from "socket.io-client";

import clap from "@/animations/clap.json";
import confetti from "@/animations/confetti.json";
import heart from "@/animations/heart.json";

import dynamic from "next/dynamic";
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const socket = io(process.env.NEXT_PUBLIC_API);

interface Reaction {
  type: string;
  id: number;
  animationPath: any;
  size: number;
}

export default function ReactionListener() {
  const [animations, setAnimations] = useState<Reaction[]>([]);

  useEffect(() => {
    socket.on("reaction", (reaction: { type: string }) => {
      const animationData = getAnimationData(reaction.type);
      if (animationData) {
        const newAnimation: Reaction = {
          type: reaction.type,
          id: Date.now(),
          animationPath: animationData.animationPath,
          size: animationData.size,
        };
        setAnimations((prev) => [...prev, newAnimation]);

        setTimeout(() => {
          setAnimations((prev) =>
            prev.filter((anim) => anim.id !== newAnimation.id)
          );
        }, 5000);
      }
    });

    return () => {
      socket.off("reaction");
    };
  }, []);

  const getAnimationData = (type: string) => {
    switch (type) {
      case "heart":
        return { animationPath: heart, size: 400 };
      case "clap":
        return { animationPath: clap, size: 300 };
      case "confetti":
        return { animationPath: confetti, size: 700 };
      default:
        return null;
    }
  };

  if (animations.length === 0) return null;

  return (
    <div className="fixed inset-0 flex flex-col justify-end items-center pb-8 pointer-events-none z-[9999]">
      {animations.map((anim) => (
        <div key={anim.id} className="absolute bottom-8">
          <Lottie
            animationData={anim.animationPath}
            loop={false}
            autoplay
            style={{
              width: anim.size,
              height: anim.size,
            }}
            onComplete={() => {
              setAnimations((prev) => prev.filter((a) => a.id !== anim.id));
            }}
          />
        </div>
      ))}
    </div>
  );
}
