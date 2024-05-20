"use client";

import { useEffect, useState } from "react";

interface CountdownProps {
  seconds: number;
}

export const Countdown = ({ seconds: initialSeconds }: CountdownProps) => {
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    setSeconds(initialSeconds);
  }, [initialSeconds]);

  useEffect(() => {
    const timer =
      seconds > 0 ? setTimeout(() => setSeconds(seconds - 1), 1000) : null;
    return () => clearTimeout(timer ? Number(timer) : 0); // Ensuring clearTimeout receives a number
  }, [seconds]);

  const days = Math.floor(seconds / 86400);
  const hours = Math.floor((seconds % 86400) / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const displaySeconds = seconds % 60;

  return (
    <div className="flex gap-4 justify-between text-white p-4">
      <div>Time until finalized epoch</div>
      {days > 0 && <div>{days} days</div>}
      {hours}:{minutes < 10 ? "0" + minutes : minutes}:
      {displaySeconds < 10 ? "0" + displaySeconds : displaySeconds}
    </div>
  );
};
