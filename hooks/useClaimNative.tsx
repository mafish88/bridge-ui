import { ethers } from "ethers";
import { useCallback, useEffect, useState } from "react";
import { useContract } from "./useContract";
import { useConnection } from "./useConnection";
import { useWalletPopup } from "../context/wallet-popup";

export const useClaimNative = () => {
  const { account } = useConnection();
  const { taraConnectorContract } = useContract();
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<string>("");
  const [error, setError] = useState<string>("");

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
      setStatus("Fail");
      setError("Contract not available");
      return;
    }
    setIsLoading(true);
    asyncCallback(
      async () => {
        return await onClaim(account);
      },
      () => {
        setIsLoading(false);
        setStatus("Lock successful");
        setError("");
        onSuccess();
      },
      () => {
        setIsLoading(false);
        setStatus("Fail");
        setError("Transaction failed");
      }
    );
  };

  const resetState = () => {
    setStatus("");
    setError("");
  };

  useEffect(() => {
    resetState();
  }, [account]);

  return { claim, isLoading, status, error, resetState };
};
