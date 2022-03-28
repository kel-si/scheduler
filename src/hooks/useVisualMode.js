import { useState } from "react";

export default function useVisualMode(initial) {
  //mode is the last item in the history array
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([]);

  function transition(newMode) {
    setHistory((prev) => [...prev, mode]);
    setMode(newMode);
  }

  //transition back to previous mode
  function back() {
    let historyCopy = history.slice(0);
    if (historyCopy.length >= 1) {
      const prevMode = historyCopy.pop();
      setMode(prevMode);
      setHistory(historyCopy);
      return mode;
    }
    return historyCopy;
  }

  return { mode, transition, back };
}
