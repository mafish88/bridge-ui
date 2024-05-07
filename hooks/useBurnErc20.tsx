import { ethers } from "ethers";
import { useCallback, useEffect, useState } from "react";
import { useContract } from "./useContract";
import { useConnection } from "./useConnection";

export const useBurnErc20 = () => {
  const { account } = useConnection();
  const { erc20MintingConnectorContract } = useContract();
  const [isLoading, setIsLoading] = useState(false);
  const [state, setState] = useState({ status: "", error: "" });

  const burn = useCallback(
    async (amount: number, onSuccess: () => void) => {
      if (!erc20MintingConnectorContract || !account || !amount) {
        setState({ status: "Fail", error: "Contract not available" });
        return;
      }

      try {
        setIsLoading(true);
        const valueInEther = ethers.utils.formatEther(amount.toString());
        const tx = await erc20MintingConnectorContract.burn(valueInEther);
        await tx.wait();
        setIsLoading(false);
        setState({ status: "Burn successful", error: "" });
        onSuccess();
      } catch (error: any) {
        setIsLoading(false);
        const errorMessage = error.reason
          ? error.reason.split(":").pop()?.trim()
          : error.message;

        setState({
          status: "Fail",
          error: errorMessage,
        });
      }
    },
    [account, erc20MintingConnectorContract]
  );

  const resetState = () => {
    setState({ status: "", error: "" });
  };

  useEffect(() => {
    setState({ status: "", error: "" });
  }, [account]);

  return { burn, isLoading, state, resetState };
};
