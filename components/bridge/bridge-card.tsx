"use client";

import { useState } from "react";
import { Card } from "../card";
import { SelectNetworks } from "./select-networks";
import { SelectCoins } from "./select-coins";

export const BridgeCard = () => {
  const [step, setStep] = useState<1 | 2 | 3>(1);

  return (
    <Card className="p-10">
      {step == 1 && (
        <div className="flex flex-col gap-5">
          <SelectNetworks setStep={() => setStep(2)} />
        </div>
      )}
      {step == 2 && (
        <div className="flex flex-col gap-5">
          <SelectCoins setStep={() => setStep(3)} />
        </div>
      )}
    </Card>
  );
};
