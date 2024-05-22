import { ethers, utils } from "ethers";
import { useCallback, useEffect, useState } from "react";
import { useContract } from "./useContract";
import { useConnection } from "./useConnection";
import { useWalletPopup } from "../context/wallet-popup";
import { useTokenApprove } from "./useTokenApprove";

export const useBurnErc20 = () => {
  const { account } = useConnection();
  const { erc20MintingConnectorContract } = useContract();
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<string>("");
  const [error, setError] = useState<string>("");

  const { approve } = useTokenApprove();
  const { asyncCallback } = useWalletPopup();

  const onBurn = useCallback(
    async (amount: number): Promise<ethers.providers.TransactionResponse> => {
      // const valueInEther = ethers.utils.formatEther(amount.toString());
      return await erc20MintingConnectorContract!.burn({
        value: utils.parseEther(`${amount}`),
      });
    },
    [erc20MintingConnectorContract]
  );

  const burn = async (amount: number, onSuccess: () => void) => {
    if (!erc20MintingConnectorContract || !account || !amount) {
      setStatus("Fail");
      setError("Contract not available");
      return;
    }
    setIsLoading(true);
    approve(account, amount, async () => {
      asyncCallback(
        async () => {
          return await onBurn(amount);
        },
        () => {
          setIsLoading(false);
          setStatus("Success");
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

  return { burn, isLoading, status, error, resetState };
};
