import { ethers } from "ethers";
import { useCallback, useEffect, useState } from "react";
import { useContract } from "./useContract";
import { useConnection } from "./useConnection";

export const useClaimNative = () => {
  const { account } = useConnection();
  const { erc20MintingConnectorContract, taraConnectorContract } =
    useContract();
  const [isLoading, setIsLoading] = useState(false);
  const [state, setState] = useState({ status: "", error: "" });

  const claim = useCallback(
    async (address: string, onSuccess: () => void) => {
      if (
        !taraConnectorContract ||
        !erc20MintingConnectorContract ||
        !account ||
        !address
      ) {
        setState({ status: "Fail", error: "Contract not available" });
        return;
      }

      try {
        setIsLoading(true);
        const feeToClain = await taraConnectorContract.feeToClaim(address);
        const valueInEther = ethers.utils.formatEther(feeToClain.toString());
        const tx = await taraConnectorContract.claim(address, {
          value: ethers.utils.parseEther(valueInEther),
        });
        await tx.wait();
        setIsLoading(false);
        setState({ status: "Claim successful", error: "" });
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
    [account, erc20MintingConnectorContract, taraConnectorContract]
  );

  const resetState = () => {
    setState({ status: "", error: "" });
  };

  useEffect(() => {
    setState({ status: "", error: "" });
  }, [account]);

  return { claim, isLoading, state, resetState };
};
