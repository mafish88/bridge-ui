"use client";

import { useState } from "react";
import { Card } from "../card";
import { SelectNetworks } from "./select-networks";
import { SelectCoins } from "./select-coins";
import { Summary } from "./summary";

export const BridgeCard = () => {
  const [step, setStep] = useState<1 | 2 | 3>(1);

  return (
    <Card className="p-10">
      {step == 1 && (
        <div className="flex flex-col gap-5">
          <SelectNetworks onContinue={() => setStep(2)} />
        </div>
      )}
      {step == 2 && (
        <div className="flex flex-col gap-5">
          <SelectCoins onBack={() => setStep(1)} onContinue={() => setStep(3)} />
        </div>
      )}
      {step == 3 && (
        <div className="flex flex-col gap-5">
          <Summary onBack={() => setStep(2)} />
        </div>
      )}
    </Card>
  );
};
