import { networks } from "@/types/networks";
import { ethers } from "ethers";
import { useMemo } from "react";

function useMainnet() {
  const chainId = useMemo(() => {
    return parseInt(process.env.NEXT_PUBLIC_MAINNET_CHAIN_ID || "841", 10);
  }, []);
  const provider = useMemo(
    () => new ethers.providers.JsonRpcProvider(networks[chainId]?.rpcUrl),
    [chainId]
  );

  return { chainId, provider };
}

export default useMainnet;
