import { useTimer } from "./hooks/useTimer";
import { Timer } from "./components/Timer";
import { Controls } from "./components/Controls";
import "./App.css";

function App() {
  const { minutes, seconds, isRunning, mode, sessions, start, pause, reset } =
    useTimer();

  return (
    <div className={`app ${mode}`}>
      <h1 className="title">Pomodoro Timer</h1>
      <Timer minutes={minutes} seconds={seconds} mode={mode} sessions={sessions} />
      <Controls
        isRunning={isRunning}
        onStart={start}
        onPause={pause}
        onReset={reset}
      />
    </div>
  );
}

export default App;
