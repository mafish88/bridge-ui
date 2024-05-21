"use client";

import { useEffect, useState } from "react";

interface CountdownProps {
  seconds: number;
  isLoading: boolean;
}

export const Countdown = ({
  seconds: initialSeconds,
  isLoading,
}: CountdownProps) => {
  const [seconds, setSeconds] = useState(initialSeconds);

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
      {isLoading ? (
        <div className="flex items-center justify-center h-64">
          <span className="loading loading-bars loading-lg"></span>
        </div>
      ) : (
        <div>
          <div>Time until finalized epoch</div>
          {days > 0 && <div>{days} days</div>}
          {hours}:{minutes < 10 ? "0" + minutes : minutes}:
          {displaySeconds < 10 ? "0" + displaySeconds : displaySeconds}
        </div>
      )}
    </div>
  );
};
