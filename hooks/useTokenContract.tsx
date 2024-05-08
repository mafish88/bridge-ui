import { useMemo } from "react";
import { ethers } from "ethers";
import { ABIs } from "@/types/abis";
import useChain from "./useChain";
import { useBridgeNetwork } from "../context/bridge-network";

export function useTokenContract() {
  const { provider, signer } = useChain();
  const { coin } = useBridgeNetwork();
  const erc20Abi = ABIs[3].abi;

  const erc20TokenContract = useMemo(() => {
    let instance: ethers.Contract | undefined;

    if (!provider || !signer || !coin || !coin.deployAddress) {
      return instance;
    }
    const contract = new ethers.Contract(
      coin.deployAddress,
      erc20Abi,
      provider
    );
    return contract.connect(signer);
  }, [coin, erc20Abi, provider, signer]);

  return { erc20TokenContract };
}
