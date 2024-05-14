import { ethers } from "ethers";
import { useCallback, useEffect, useState } from "react";
import { useContract } from "./useContract";
import { useConnection } from "./useConnection";
import { useWalletPopup } from "../context/wallet-popup";

export const useClaimNative = () => {
  const { account } = useConnection();
  const { taraConnectorContract } = useContract();
  const [isLoading, setIsLoading] = useState(false);
  const [state, setState] = useState({ status: "", error: "" });
  const { asyncCallback } = useWalletPopup();

  const onClaim = useCallback(
    async (account: string) => {
      const feeToClain = await taraConnectorContract!.feeToClaim(account);
      const valueInEther = ethers.utils.formatEther(feeToClain.toString());
      return await taraConnectorContract!.claim({
        value: ethers.utils.parseEther(valueInEther),
      });
    },
    [taraConnectorContract]
  );

  const claim = async (onSuccess: () => void) => {
    if (!taraConnectorContract || !account) {
      setState({ status: "Fail", error: "Contract not available" });
      return;
    }
    setIsLoading(true);
    asyncCallback(
      async () => {
        return await onClaim(account);
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
