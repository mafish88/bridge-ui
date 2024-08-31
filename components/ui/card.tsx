"use client";

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
  // background-image: linear-gradient(90deg, #15AC5B 40.68%, #042413 120.24%);
  return (
    <div className="relative w-full">
      {showTopCard && topCardContent && (
        <div className="relative z-0 p-10 transform translate-y-12 rounded-t-2xl w-full bg-gradient-to-r pb-20 text-white from-[#15AC5B] to-[#094223]">
          {topCardContent}
        </div>
      )}
      <div
        className={clsx(
          "card shadow-xl w-full z-20 bg-neutral text-neutral-content",
          className
        )}
      >
        {children}
      </div>
    </div>
  );
};
