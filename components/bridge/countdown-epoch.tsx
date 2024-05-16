import { useEffect, useState } from "react";

interface CountdownProps {
  minutes: number;
}

export const Countdown = ({ minutes }: CountdownProps) => {
  const [seconds, setSeconds] = useState(minutes * 60);

  useEffect(() => {
    if (seconds > 0) {
      setTimeout(() => setSeconds(seconds - 1), 1000);
    }
  }, [seconds]);

  const displayMinutes = Math.floor(seconds / 60);
  const displaySeconds = seconds % 60;

  return (
    <div className="flex gap-4 justify-between text-white p-4">
      <div>Time until finalized epoch</div>
      {displayMinutes}:{displaySeconds < 10 ? "0" : ""}
      {displaySeconds}
    </div>
  );
};
