import { ethers, utils } from "ethers";
import { useCallback, useEffect, useState } from "react";
import { useContract } from "./useContract";
import { useConnection } from "./useConnection";
import { useBridgeContract } from "./useBridgeContract";
import { useWalletPopup } from "@/context/wallet-popup";
import { useBridgeNetwork } from "@/context/bridge-network";

export const useLockNative = () => {
  const { account } = useConnection();
  const { nativeConnectorContract } = useContract();
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<string>("");
  const [error, setError] = useState<string>("");

  const { asyncCallback } = useWalletPopup();

  const { fromNetwork } = useBridgeNetwork();
  const { getBridgeContract } = useBridgeContract(fromNetwork);

  const onLock = useCallback(
    async (amount: number): Promise<ethers.providers.TransactionResponse> => {
      const bridgeContract = await getBridgeContract();
      const settlementFee = await bridgeContract!.settlementFee();

      return await nativeConnectorContract!.lock(
        utils.parseEther(`${amount}`),
        {
          value: utils.parseEther(`${amount}`).add(settlementFee),
        }
      );
    },
    [nativeConnectorContract, getBridgeContract]
  );

  const lock = async (amount: number, onSuccess: () => void) => {
    if (!nativeConnectorContract || !account) {
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
        setStatus("Fail");
        setError("Transaction failed");
        setIsLoading(false);
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
