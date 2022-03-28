import { FALSE } from "node-sass";
import { useState } from "react";

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  function transition(newMode, replace = false) {
    if (replace) {
      const newHistory = [...history];
      newHistory[newHistory.length - 1] = newMode;
      setHistory(newHistory);
    } else {
      setHistory((prev) => [...prev, newMode]);
    }
    setMode(newMode);
  }

  //transition back to previous mode
  function back() {
    let historyCopy = history.slice(0);
    if (historyCopy.length > 1) {
      const prevMode = historyCopy.pop();
      const secondLastElement = history.length - 2;
      setMode(historyCopy[secondLastElement]);
      setHistory(historyCopy);
    }
  }

  return { mode, transition, back };
}
