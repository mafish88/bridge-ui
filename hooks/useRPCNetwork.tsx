import { ethers } from "ethers";
import { useMemo } from "react";
import { bridgeNetworks } from "@/types/bridge-networks";
import { TARA_CHAIN_ID, ETH_CHAIN_ID } from "@/types/addresses";

export const useRPCNetwork = () => {
  const taraMainnetProvider = useMemo(
    () =>
      new ethers.providers.JsonRpcProvider(
        bridgeNetworks[TARA_CHAIN_ID]?.rpcUrl
      ),
    []
  );
  const ethMainnetProvider = useMemo(
    () =>
      new ethers.providers.JsonRpcProvider(
        bridgeNetworks[ETH_CHAIN_ID]?.rpcUrl
      ),
    []
  );

  return {
    taraMainnetProvider,
    ethMainnetProvider,
  };
};
