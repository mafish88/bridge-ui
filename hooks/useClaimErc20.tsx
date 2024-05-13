import { ethers } from "ethers";
import { useCallback, useEffect, useState } from "react";
import { useContract } from "./useContract";
import { useConnection } from "./useConnection";
import { useWalletPopup } from "../context/wallet-popup";

export const useClaimErc20 = () => {
  const { account } = useConnection();
  const { erc20MintingConnectorContract, taraConnectorContract } =
    useContract();
  const [isLoading, setIsLoading] = useState(false);
  const [state, setState] = useState({ status: "", error: "" });
  const { asyncCallback } = useWalletPopup();

  const onClaim = useCallback(
    async (address: string) => {
      const feeToClain = await taraConnectorContract!.feeToClaim(address);
      const valueInEther = ethers.utils.formatEther(feeToClain.toString());
      return await erc20MintingConnectorContract!.claim(address, {
        value: ethers.utils.parseEther(valueInEther),
      });
    },
    [taraConnectorContract, erc20MintingConnectorContract]
  );

  const claim = async (address: string, onSuccess: () => void) => {
    if (
      !taraConnectorContract ||
      !erc20MintingConnectorContract ||
      !account ||
      !address
    ) {
      setState({ status: "Fail", error: "Contract not available" });
      return;
    }
    setIsLoading(true);
    asyncCallback(
      async () => {
        return await onClaim(address);
      },
      () => {
        setIsLoading(false);
        setState({ status: "Lock successful", error: "" });
        onSuccess();
      },
      () => {
        setIsLoading(false);
        setState({ status: "Fail", error: "Transaction failed" });
      }
    );
  };

  const resetState = () => {
    setState({ status: "", error: "" });
  };

  useEffect(() => {
    setState({ status: "", error: "" });
  }, [account]);

  return { claim, isLoading, state, resetState };
};
