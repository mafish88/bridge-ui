"use client";

import clsx from "clsx";
import React from "react";
import { BridgeToggleType } from "../context/bridge-network";

interface BridgeToggleProps {
  defaultValue: BridgeToggleType;
  onChange: (value: BridgeToggleType) => void;
  name: string;
}

export const BridgeClaimToggle: React.FC<BridgeToggleProps> = ({
  defaultValue,
  onChange,
  name,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value as BridgeToggleType;
    onChange(value);
  };

  return (
    <div className="join">
      {Object.values(BridgeToggleType).map((value) => (
        <input
          key={value}
          className={clsx(
            "join-item btn w-[200px]",
            defaultValue === value && "selectedToggle"
          )}
          type="radio"
          name={name}
          value={value}
          checked={defaultValue === value}
          onChange={handleChange}
          aria-label={value}
        />
      ))}
    </div>
  );
};

export default BridgeClaimToggle;
