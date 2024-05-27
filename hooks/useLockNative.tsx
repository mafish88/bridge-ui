import { ethers, utils } from "ethers";
import { useCallback, useEffect, useState } from "react";
import { useContract } from "./useContract";
import { useConnection } from "./useConnection";
import { useWalletPopup } from "../context/wallet-popup";

export const useLockNative = () => {
  const { account } = useConnection();
  const { taraConnectorContract } = useContract();
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<string>("");
  const [error, setError] = useState<string>("");

  const { asyncCallback } = useWalletPopup();

  const onLock = useCallback(
    async (amount: number): Promise<ethers.providers.TransactionResponse> => {
      return await taraConnectorContract!.lock({
        value: utils.parseEther(`${amount}`),
      });
    },
    [taraConnectorContract]
  );

  const lock = async (amount: number, onSuccess: () => void) => {
    if (!taraConnectorContract || !account) {
      setStatus("Fail");
      setError("Contract not available");
      return;
    }
    setIsLoading(true);
    asyncCallback(
      async () => {
        return await onLock(amount);
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

  return { lock, isLoading, status, error, resetState };
};
