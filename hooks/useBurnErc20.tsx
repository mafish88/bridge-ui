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
  const [state, setState] = useState({ status: "", error: "" });
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
      setState({ status: "Fail", error: "Contract not available" });
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
          setState({ status: "Burn successful", error: "" });
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

  return { burn, isLoading, state, resetState };
};
