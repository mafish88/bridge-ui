import { ethers, utils } from "ethers";
import { useCallback, useEffect, useState } from "react";
import { useContract } from "./useContract";
import { useConnection } from "./useConnection";
import { useWalletPopup } from "../context/wallet-popup";

export const useLockNative = () => {
  const { account } = useConnection();
  const { taraConnectorContract } = useContract();
  const [isLoading, setIsLoading] = useState(false);
  const [state, setState] = useState({ status: "", error: "" });
  const { asyncCallback } = useWalletPopup();

  const onLock = useCallback(
    async (amount: number): Promise<ethers.providers.TransactionResponse> => {
      return await taraConnectorContract!.lock({
        value: utils.parseEther(`${amount}`),
      });
    },
    [taraConnectorContract]
  );

  const lock = (amount: number, onSuccess: () => void) => {
    if (!taraConnectorContract || !account) {
      setState({ status: "Fail", error: "Contract not available" });
      return;
    }
    setIsLoading(true);
    asyncCallback(
      async () => {
        console.log("HERE IT IS, lets lock some tokens");
        return await onLock(amount);
      },
      () => {
        setIsLoading(false);
        setState({ status: "Lock successful", error: "" });
        onSuccess();
      }
    );
  };

  const resetState = () => {
    setState({ status: "", error: "" });
  };

  useEffect(() => {
    setState({ status: "", error: "" });
  }, [account]);

  return { lock, isLoading, state, resetState };
};
