"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Play, Pause, RotateCcw } from "lucide-react"
import { Progress } from "@/components/ui/progress"

interface TimerProps {
  duration: number // in minutes
}

export function Timer({ duration }: TimerProps) {
  const totalSeconds = duration * 60
  const [seconds, setSeconds] = useState(totalSeconds)
  const [isActive, setIsActive] = useState(false)
  const progress = ((totalSeconds - seconds) / totalSeconds) * 100

  useEffect(() => {
    let interval: NodeJS.Timeout

    if (isActive && seconds > 0) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1)
      }, 1000)
    } else if (seconds === 0) {
      setIsActive(false)
    }

    return () => clearInterval(interval)
  }, [isActive, seconds])

  const toggleTimer = () => {
    setIsActive(!isActive)
  }

  const resetTimer = () => {
    setIsActive(false)
    setSeconds(totalSeconds)
  }

  const formatTime = () => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`
  }

  return (
    <Card>
      <CardContent className="pt-6">
        <div className="text-center mb-4">
          <div className="text-3xl font-bold">{formatTime()}</div>
          <div className="text-sm text-muted-foreground">Tempo restante</div>
        </div>

        <Progress value={progress} className="h-2 mb-4" />

        <div className="flex justify-center space-x-2">
          <Button variant="outline" size="icon" onClick={toggleTimer} aria-label={isActive ? "Pausar" : "Iniciar"}>
            {isActive ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
          </Button>
          <Button variant="outline" size="icon" onClick={resetTimer} aria-label="Reiniciar">
            <RotateCcw className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

