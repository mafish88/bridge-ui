"use client";

import clsx from "clsx";
import React from "react";
import { BridgeClaimTypeToggle } from "../context/bridge-network";

interface BridgeClaimToggleProps {
  defaultValue: BridgeClaimTypeToggle;
  onChange: (value: BridgeClaimTypeToggle) => void;
  name: string;
}

export const BridgeClaimToggle: React.FC<BridgeClaimToggleProps> = ({
  defaultValue,
  onChange,
  name,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value as BridgeClaimTypeToggle;
    onChange(value);
  };

  return (
    <div className="join">
      {Object.values(BridgeClaimTypeToggle).map((value) => (
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

export default BridgeClaimTypeToggle;
