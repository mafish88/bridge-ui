"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { BridgeNetwork, Coin, bridgeNetworks } from "@/types/bridge-networks";

type BridgeNetworkContextType = {
  bridgeNetworks: BridgeNetwork[];
  fromNetwork: BridgeNetwork;
  toNetwork: BridgeNetwork;
  coin: Coin | null;
  amount: number;
  setFromNetwork: (network: BridgeNetwork) => void;
  setToNetwork: (network: BridgeNetwork) => void;
  setCoin: (coin: Coin) => void;
  setAmount: (amount: number) => void;
};

const BridgeNetworkContext = createContext<BridgeNetworkContextType>({
  bridgeNetworks: bridgeNetworks,
  fromNetwork: bridgeNetworks[1],
  toNetwork: bridgeNetworks[0],
  coin: null,
  amount: 0,
  setFromNetwork: (network: BridgeNetwork) => {},
  setToNetwork: (network: BridgeNetwork) => {},
  setCoin: (coin: Coin) => {},
  setAmount: (amount: number) => {},
});

export const BridgeNetworkProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [fromNetwork, setFromNetwork] = useState<BridgeNetwork>(
    bridgeNetworks[1]
  );
  const [toNetwork, setToNetwork] = useState<BridgeNetwork>(bridgeNetworks[0]);
  const [coin, setCoin] = useState<Coin | null>(null);
  const [amount, setAmount] = useState<number>(0);

  return (
    <BridgeNetworkContext.Provider
      value={{
        fromNetwork,
        toNetwork,
        setFromNetwork,
        setToNetwork,
        bridgeNetworks,
        coin,
        setCoin,
        amount,
        setAmount,
      }}
    >
      {children}
    </BridgeNetworkContext.Provider>
  );
};

export const useBridgeNetwork = () => {
  const context = useContext(BridgeNetworkContext);
  if (context === undefined) {
    throw new Error(
      "useBridgeNetwork must be used within BridgeNetworkProvider"
    );
  }
  return context;
};
