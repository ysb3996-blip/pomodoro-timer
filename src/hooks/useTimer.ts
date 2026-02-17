import { useState, useEffect, useCallback, useRef } from "react";

type TimerMode = "work" | "break";

interface UseTimerReturn {
  minutes: number;
  seconds: number;
  isRunning: boolean;
  mode: TimerMode;
  sessions: number;
  start: () => void;
  pause: () => void;
  reset: () => void;
}

const WORK_DURATION = 25 * 60;
const BREAK_DURATION = 5 * 60;

function notifyUser(mode: TimerMode) {
  if (Notification.permission === "granted") {
    new Notification(
      mode === "work" ? "休憩時間です！" : "作業を再開しましょう！",
      {
        body:
          mode === "work"
            ? "お疲れさまです。5分間休憩しましょう。"
            : "休憩終了！次のセッションを始めましょう。",
      }
    );
  }
}

export function useTimer(): UseTimerReturn {
  const [timeLeft, setTimeLeft] = useState(WORK_DURATION);
  const [isRunning, setIsRunning] = useState(false);
  const [mode, setMode] = useState<TimerMode>("work");
  const [sessions, setSessions] = useState(0);
  const intervalRef = useRef<number | null>(null);

  const clearTimer = useCallback(() => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  useEffect(() => {
    if (!isRunning) {
      clearTimer();
      return;
    }

    intervalRef.current = window.setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          setIsRunning(false);
          if (mode === "work") {
            setSessions((s) => s + 1);
            notifyUser("work");
            setMode("break");
            return BREAK_DURATION;
          } else {
            notifyUser("break");
            setMode("work");
            return WORK_DURATION;
          }
        }
        return prev - 1;
      });
    }, 1000);

    return clearTimer;
  }, [isRunning, mode, clearTimer]);

  const start = useCallback(() => {
    if (Notification.permission === "default") {
      Notification.requestPermission();
    }
    setIsRunning(true);
  }, []);

  const pause = useCallback(() => {
    setIsRunning(false);
  }, []);

  const reset = useCallback(() => {
    setIsRunning(false);
    setMode("work");
    setTimeLeft(WORK_DURATION);
  }, []);

  return {
    minutes: Math.floor(timeLeft / 60),
    seconds: timeLeft % 60,
    isRunning,
    mode,
    sessions,
    start,
    pause,
    reset,
  };
}
