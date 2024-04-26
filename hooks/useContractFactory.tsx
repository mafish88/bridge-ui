import { ethers } from "ethers";
import useChain from "./useChain";
import { networks } from "@/types/networks";
import { useMemo } from "react";
import { getABIForToken } from "@/utils/get-abi-for-token";
import { getTokenConfiguration } from "@/utils/get-token-configuration";

export const useContractFactory = (tokenName: string) => {
  const { provider, signer } = useChain();
  const token = getTokenConfiguration(tokenName);

  return useMemo(() => {
    if (!provider || !signer || !token) return undefined;

    const abi = getABIForToken(token);
    const contractAddress =
      token.baseNetwork === networks[token.baseNetwork].chainId
        ? token.taraxaContract
        : token.ethereumContract;

    if (!abi.length || !contractAddress) return undefined;

    const contract = new ethers.Contract(
      contractAddress,
      abi,
      provider
    ).connect(signer);
    return contract;
  }, [provider, signer, token]);
};
