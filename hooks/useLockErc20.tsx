import { ethers, utils } from "ethers";
import { useCallback, useEffect, useState } from "react";
import { useContract } from "./useContract";
import { useConnection } from "./useConnection";
import { useTokenApprove } from "./useTokenApprove";
import { useWalletPopup } from "../context/wallet-popup";

export const useLockErc20 = () => {
  const { account } = useConnection();
  const { erc20LockingConnectorContract } = useContract();
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<string>("");
  const [error, setError] = useState<string>("");

  const { approve } = useTokenApprove();
  const { asyncCallback } = useWalletPopup();

  const onLock = useCallback(
    async (amount: number): Promise<ethers.providers.TransactionResponse> => {
      return await erc20LockingConnectorContract!.lock(amount);
    },
    [erc20LockingConnectorContract]
  );

  const lock = async (amount: number, onSuccess: () => void) => {
    if (!erc20LockingConnectorContract || !account) {
      setStatus("Fail");
      setError("Contract not available");
      return;
    }
    setIsLoading(true);
    approve(account, amount, async () => {
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
    });
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
