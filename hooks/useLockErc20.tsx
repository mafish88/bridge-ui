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
  const [state, setState] = useState({ status: "", error: "" });
  const { approve } = useTokenApprove();
  const { asyncCallback } = useWalletPopup();

  const onLock = useCallback(
    async (amount: number): Promise<ethers.providers.TransactionResponse> => {
      return await erc20LockingConnectorContract!.lock({
        value: utils.parseEther(`${amount}`),
      });
    },
    [erc20LockingConnectorContract]
  );

  const lock = async (amount: number, onSuccess: () => void) => {
    if (!erc20LockingConnectorContract || !account) {
      setState({ status: "Fail", error: "Contract not available" });
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
          setState({ status: "Lock successful", error: "" });
          onSuccess();
        },
        () => {
          setIsLoading(false);
          setState({ status: "Fail", error: "Transaction failed" });
        }
      );
    });
  };

  const resetState = () => {
    setState({ status: "", error: "" });
  };

  useEffect(() => {
    setState({ status: "", error: "" });
  }, [account]);

  return { lock, isLoading, state, resetState };
};
