"use client"

import { Progress } from "@/components/ui/progress";
import React from "react";

export function ProgressBar() {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const runProgressLoop = () => {

      setTimeout(() => setProgress(4), 1000);
      setTimeout(() => setProgress(15), 2000);
      setTimeout(() => setProgress(25), 3600);
      setTimeout(() => setProgress(44), 4000);
      setTimeout(() => setProgress(66), 5000);
      setTimeout(() => setProgress(78), 6000);
    };

    runProgressLoop();

    const loopInterval = setInterval(runProgressLoop, 5500);

    return () => clearInterval(loopInterval);
  }, []);

  return <Progress value={progress} className="w-[50%] h-2" />;
}
