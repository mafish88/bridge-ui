import { ethers } from "ethers";
import { useCallback, useState } from "react";
import { useTokenContract } from "./useTokenContract";
import { useWalletPopup } from "../context/wallet-popup";

export const useTokenApprove = () => {
  const { erc20TokenContract } = useTokenContract();
  const { asyncCallback } = useWalletPopup();
  const [state, setState] = useState({ status: "", error: "" });

  const onApprove = useCallback(
    async (
      spender: string,
      amount: ethers.BigNumberish
    ): Promise<ethers.providers.TransactionResponse> => {
      return await erc20TokenContract!.approve(spender, amount);
    },
    [erc20TokenContract]
  );

  const approve = (
    spender: string,
    amount: ethers.BigNumberish,
    onSuccess: () => void
  ) => {
    asyncCallback(
      async () => {
        return await onApprove(spender, amount);
      },
      () => {
        setState({ status: "Approve successful", error: "" });
        onSuccess();
      },
      () => {
        setState({ status: "Fail", error: "Transaction failed" });
      }
    );
  };

  return { state, approve };
};
