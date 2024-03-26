"use client";

import { useThemeSwitch } from "@/context/theme-switch";
import clsx from "clsx";

export type CardProps = {
  children: React.ReactNode;
  className?: string;
  showTopCard?: boolean;
  topCardContent?: JSX.Element;
};

export const Card = ({
  children,
  className,
  showTopCard = false,
  topCardContent,
}: CardProps) => {
  const { theme } = useThemeSwitch();

  return (
    <div className="relative w-full">
      {showTopCard && topCardContent && (
        <div className={clsx(
          'relative z-0 p-10 transform translate-y-12 rounded-t-2xl w-full bg-gradient-to-r pb-20 text-white',
          theme === "dark" ? "from-gray-800 to-slate-700" : "from-gray-600 to-slate-500",
        )}>
          {topCardContent}
        </div>
      )}
      <div
        className={clsx(
          "card shadow-xl w-full z-20",
          theme === "dark"
            ? "bg-neutral text-neutral-content"
            : "bg-base-100 text-base-content",
          className
        )}
      >
        {children}
      </div>
    </div>
  );
};
