"use client";

import { Card } from "../card";
import { useState } from "react";
import { ClaimNetwork } from "./claim-network";
import { SelectedNetwork } from "../selected-network";
import { useBridgeNetwork } from "@/context/bridge-network";
import { ClaimTokens } from "./claim-tokens";

export const ClaimCard = () => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const { fromNetwork } = useBridgeNetwork();
  const showTopCard = step > 1;

  const topCard: JSX.Element = (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col sm:flex-row justify-between items-center">
        <SelectedNetwork
          title="Selected network"
          name={fromNetwork.chainName}
          image={{
            src: fromNetwork.iconUrl,
            alt: fromNetwork.chainName,
            height: 30,
            width: fromNetwork.isImageTall ? 20 : 30,
          }}
        />
      </div>
    </div>
  );

  return (
    <Card className="p-10" showTopCard={showTopCard} topCardContent={topCard}>
      {step == 1 && <ClaimNetwork onContinue={() => setStep(2)} />}
      {step == 2 && (
        <ClaimTokens onBack={() => setStep(1)} onContinue={() => setStep(3)} />
      )}
    </Card>
  );
};
