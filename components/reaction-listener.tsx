"use client";

import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import Lottie from "lottie-react";

const socket = io("http://localhost:4000");

interface Reaction {
  type: string;
  id: number;
  animationPath: string;
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
        return { animationPath: "/animations/heart.json", size: 400 };
      case "clap":
        return { animationPath: "/animations/clap.json", size: 300 };
      case "confetti":
        return { animationPath: "/animations/confetti.json", size: 700 };
      default:
        return null;
    }
  };

  if (animations.length === 0) return null;

  return (
    <div className="fixed inset-0 flex flex-col justify-end items-center pb-8 pointer-events-none z-[9999]">
      {animations.map((anim, index) => (
        <div key={anim.id} className="absolute bottom-8">
          <Lottie
            animationData={require(`../public${anim.animationPath}`)}
            loop={false}
            autoplay={true}
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
