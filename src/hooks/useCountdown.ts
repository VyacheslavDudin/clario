import { useState, useEffect } from "react";

const SECS_IN_30_MINS = 1800;
const DEFAULT_COUNTDOWN_KEY_NAME = "COUNTDOWN_TIME";
const SECS_IN_MINUTE = 60;

export function useCountdown(
  key = DEFAULT_COUNTDOWN_KEY_NAME,
  initialSecs = SECS_IN_30_MINS
) {
  const initialSeconds = localStorage.getItem(key) || initialSecs;
  const [seconds, setSeconds] = useState(+initialSeconds);

  useEffect(() => {
    const timerId = setTimeout(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
    }, 1000);

    return () => {
      clearTimeout(timerId);
      localStorage.setItem(key, seconds.toString());
    };
  }, [seconds]);

  const mins = Math.floor(seconds / SECS_IN_MINUTE);
  const secs = Math.round(seconds - mins * SECS_IN_MINUTE);

  return { mins: formatTime(mins), secs: formatTime(secs) };
}

function formatTime(time: number) {
  const timeStr = time.toString();

  return timeStr.length < 2 ? `0${timeStr}` : timeStr;
}
