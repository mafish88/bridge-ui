"use client";

import { useState } from "react";
import { Card } from "../card";
import { SelectNetworks } from "./select-networks";
import { SelectCoins } from "./select-coins";
import { Summary } from "./summary";
import { useBridgeNetwork } from "../../context/bridge-network";
import { SelectedNetwork } from "../selected-network";
import { ChevronForwardIcon } from "../ui/icons";
import Image from "next/image";

export const BridgeCard = () => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const showTopCard = step > 1;
  const { fromNetwork, toNetwork, coin, amount } = useBridgeNetwork();

  const topCard: JSX.Element = (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col sm:flex-row justify-between items-center">
        <SelectedNetwork
          title="Transfer From"
          name={fromNetwork.chainName}
          image={{
            src: fromNetwork.iconUrl,
            alt: fromNetwork.chainName,
            height: 30,
            width: fromNetwork.isImageTall ? 20 : 30,
          }}
        />
        <ChevronForwardIcon />
        <SelectedNetwork
          title="Transfer To"
          name={toNetwork.chainName}
          image={{
            src: toNetwork.iconUrl,
            alt: toNetwork.chainName,
            height: 30,
            width: toNetwork.isImageTall ? 20 : 30,
          }}
        />
      </div>
      {step > 2 && (
        <div className="flex flex-col gap-4 justify-center items-center">
          {amount && coin && (
            <div className="flex flex-col sm:flex-row gap-4">
              <p>Amount:</p>
              <div className="flex gap-2">
                <p>{amount}</p>
                <p>{coin.symbol}</p>
                <Image
                  src={coin.iconUrl}
                  alt={coin.name}
                  height={30}
                  width={coin.isImageTall ? 20 : 30}
                />
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );

  return (
    <Card className="p-10" showTopCard={showTopCard} topCardContent={topCard}>
      {step == 1 && (
        <div className="flex flex-col gap-5">
          <SelectNetworks onContinue={() => setStep(2)} />
        </div>
      )}
      {step == 2 && (
        <div className="flex flex-col gap-5">
          <SelectCoins
            onBack={() => setStep(1)}
            onContinue={() => setStep(3)}
          />
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
