import { useMemo, useState } from "react";
import { BigNumber, ethers } from "ethers";
import { useBridgeNetwork } from "../context/bridge-network";
import useChain from "./useChain";

// Hook to get a contract instance based on the context's fromNetwork and selected coin
function useBridgeContract(contractFunction: string) {
  const { provider, signer } = useChain();
  const { fromNetwork, coin } = useBridgeNetwork();

  const contractDetails = useMemo(() => {
    if (!fromNetwork || !coin || !provider || !signer) {
      return {
        contractInstance: undefined,
        error: "Required context or provider/signer is missing",
      };
    }

    const contract = coin.contracts[fromNetwork.chainId];
    const funcDetails = contract?.functions[contractFunction];

    if (!funcDetails) {
      return {
        contractInstance: undefined,
        error: "Contract function details not found",
      };
    }

    const contractInstance = new ethers.Contract(
      contract.deployAddress,
      funcDetails.abi,
      signer
    );
    return { contractInstance, error: null };
  }, [fromNetwork, coin, contractFunction, provider, signer]);

  return contractDetails;
}
