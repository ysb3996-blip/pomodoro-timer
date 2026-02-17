import styles from "./Timer.module.css";

interface TimerProps {
  minutes: number;
  seconds: number;
  mode: "work" | "break";
  sessions: number;
}

export function Timer({ minutes, seconds, mode, sessions }: TimerProps) {
  const display = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

  return (
    <div className={styles.container}>
      <div className={`${styles.modeLabel} ${styles[mode]}`}>
        {mode === "work" ? "作業中" : "休憩中"}
      </div>
      <div className={styles.time}>{display}</div>
      <div className={styles.sessions}>
        セッション: {sessions} 回完了
      </div>
    </div>
  );
}
