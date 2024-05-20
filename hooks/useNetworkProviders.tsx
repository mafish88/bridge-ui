import { ethers } from "ethers";
import { useMemo } from "react";
import { TARA_CHAIN_ID, ETH_CHAIN_ID } from "@/types/addresses";
import { networks } from "../types/networks";

export const useNetworkProviders = () => {
  const taraMainnetProvider = useMemo(() => {
    try {
      const provider = new ethers.providers.JsonRpcProvider(
        networks[TARA_CHAIN_ID]?.rpcUrl
      );
      console.log("TARA Provider Initialized:", provider);
      return provider;
    } catch (error) {
      console.error("Error initializing TARA provider:", error);
      return null;
    }
  }, []);
  const ethMainnetProvider = useMemo(() => {
    try {
      const provider = new ethers.providers.JsonRpcProvider(
        networks[ETH_CHAIN_ID]?.rpcUrl
      );
      console.log("ETH Provider Initialized:", provider);
      return provider;
    } catch (error) {
      console.error("Error initializing ETH provider:", error);
      return null;
    }
  }, []);

  return {
    taraMainnetProvider,
    ethMainnetProvider,
  };
};
