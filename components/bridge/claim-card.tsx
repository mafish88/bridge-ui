"use client";

import { Card } from "../card";
import { useState } from "react";
import { ClaimNetwork } from "./claim-network";
import { SelectedNetwork } from "../selected-network";
import { useBridgeNetwork } from "@/context/bridge-network";
import { ClaimTokens } from "./claim-tokens";
import { Claim } from "@/hooks/useGetClaims";
import { ClaimSummary } from "./claim-summary";
import { Countdown } from "./countdown-epoch";
import { useLastFinalizedBlock } from "../../hooks/useLastFinalizedBlock";
import { useNetworkProviders } from "../../hooks/useNetworkProviders";

export const ClaimCard = () => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const { fromNetwork } = useBridgeNetwork();
  const [claim, setClaim] = useState<Claim | null>(null);
  const { blockInfo, isLoading } = useLastFinalizedBlock();

  const showTopCard = true;

  const topCard: JSX.Element = (
    <div className="flex flex-col gap-10">
      {blockInfo.timeLeft && (
        <div>
          <Countdown
            seconds={parseInt(blockInfo.timeLeft, 10)}
            isLoading={isLoading}
          />
        </div>
      )}
      {step > 1 && (
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
      )}
      {step > 2 && (
        <div className="flex flex-col gap-4 justify-center items-center">
          {claim && (
            <div className="flex flex-col sm:flex-row gap-4">
              <p>Claim Amount:</p>
              <div className="flex gap-2">
                <p>{claim.amount}</p>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );

  const onClaim = (claim: Claim) => {
    setClaim(claim);
    setStep(3);
  };

  return (
    <Card className="p-10" showTopCard={showTopCard} topCardContent={topCard}>
      {step == 1 && <ClaimNetwork onContinue={() => setStep(2)} />}
      {step == 2 && (
        <ClaimTokens onBack={() => setStep(1)} onContinue={onClaim} />
      )}
      {step == 3 && claim && (
        <div className="flex flex-col gap-5">
          <ClaimSummary claim={claim} onBack={() => setStep(2)} />
        </div>
      )}
    </Card>
  );
};
