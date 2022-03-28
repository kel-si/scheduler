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
    const prevMode = historyCopy.pop();
    setMode(prevMode);
    setHistory(historyCopy);
    return mode;
  }

  return { mode, transition, back };
}
