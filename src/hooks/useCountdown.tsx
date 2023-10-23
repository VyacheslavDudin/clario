import { useState, useEffect, useRef } from "react";
import { getTimeFromSeconds, getDiffInSecs } from "src/utils";

const SECS_IN_30_MINS = 1800;
const COUNTDOWN_STARTED_AT_KEY = "COUNTDOWN_STARTED_AT";

export function useCountdown({
  key = COUNTDOWN_STARTED_AT_KEY,
  initialSecs = SECS_IN_30_MINS,
  shouldStart = true,
}) {
  const timerRef = useRef({
    startedAt: localStorage.getItem(key),
  });

  const startedAt = timerRef.current.startedAt;
  const remainingSeconds = startedAt
    ? initialSecs - getDiffInSecs(startedAt)
    : initialSecs;
  const [seconds, setSeconds] = useState(
    remainingSeconds < 0 ? 0 : remainingSeconds
  );

  useEffect(() => {
    if (shouldStart && !timerRef.current.startedAt) {
      const startedAt = new Date().toISOString();
      timerRef.current.startedAt = startedAt;
      localStorage.setItem(key, startedAt);
      setSeconds(secs => secs - 1);
    }
  }, [key, shouldStart]);

  useEffect(() => {
    const timerId = setTimeout(() => {
      if (seconds > 0 && startedAt) {
        setSeconds(seconds - 1);
      }
    }, 1000);

    return () => {
      clearTimeout(timerId);
    };
  }, [seconds, startedAt]);

  const { mins, secs } = getTimeFromSeconds(seconds);

  return { mins, secs, isActive: remainingSeconds > 0 };
}
