import { useState } from "react";

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  function transition(newMode) {
    setHistory((prev) => [newMode, ...prev]);
    setMode(newMode);
  }

  return { mode, transition };
}
