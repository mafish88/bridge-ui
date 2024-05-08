import { ethers } from "ethers";
import { useCallback } from "react";
import { useTokenContract } from "./useTokenContract";

export const useTokenApprove = () => {
  const { erc20TokenContract } = useTokenContract();

  const approve = useCallback(
    async (
      spender: string,
      amount: ethers.BigNumberish
    ): Promise<ethers.providers.TransactionReceipt | Error> => {
      try {
        const tx: ethers.providers.TransactionResponse =
          await erc20TokenContract!.approve(spender, amount);
        const receipt: ethers.providers.TransactionReceipt = await tx.wait();
        return receipt;
      } catch (error) {
        console.error(error);
        return error instanceof Error
          ? error
          : new Error("Unknown error during approve");
      }
    },
    [erc20TokenContract]
  );

  return approve;
};
