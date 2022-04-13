import { useState } from "react";

export default function useVisualMode(initial) {
  // const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  function transition(newMode, replace = false) {
    setHistory((prev) =>
      replace ? [...prev.slice(0, -1), newMode] : [...prev, newMode]
    );
  }

  //transition back to previous mode
  function back() {
    if (history.length > 1) {
      setHistory((prev) => [...prev.slice(0, -1)]);
    }
  }
  console.log("history:", history);
  return { mode: history[history.length - 1], transition, back };
}
