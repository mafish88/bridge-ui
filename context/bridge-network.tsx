"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { BridgeNetwork, bridgeNetworks } from "@/types/bridge-networks";

type BridgeNetworkContextType = {
  bridgeNetworks: BridgeNetwork[];
  selectedFromNetwork: BridgeNetwork;
  setSelectedFromNetwork: (network: BridgeNetwork) => void;
};

const BridgeNetworkContext = createContext<BridgeNetworkContextType>({
  bridgeNetworks: bridgeNetworks,
  selectedFromNetwork: bridgeNetworks[1],
  setSelectedFromNetwork: (network: BridgeNetwork) => {},
});

export const BridgeNetworkProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [selectedFromNetwork, setSelectedFromNetwork] = useState<BridgeNetwork>(
    bridgeNetworks[1]
  );

  return (
    <BridgeNetworkContext.Provider
      value={{ selectedFromNetwork, setSelectedFromNetwork, bridgeNetworks }}
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
