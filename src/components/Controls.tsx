import styles from "./Controls.module.css";

interface ControlsProps {
  isRunning: boolean;
  onStart: () => void;
  onPause: () => void;
  onReset: () => void;
}

export function Controls({ isRunning, onStart, onPause, onReset }: ControlsProps) {
  return (
    <div className={styles.controls}>
      {isRunning ? (
        <button className={styles.button} onClick={onPause}>
          Pause
        </button>
      ) : (
        <button className={`${styles.button} ${styles.start}`} onClick={onStart}>
          Start
        </button>
      )}
      <button className={`${styles.button} ${styles.reset}`} onClick={onReset}>
        Reset
      </button>
    </div>
  );
}
