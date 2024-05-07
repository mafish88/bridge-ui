import { utils } from "ethers";
import { useCallback, useEffect, useState } from "react";
import { useContract } from "./useContract";
import { useConnection } from "./useConnection";

export const useLockNative = () => {
  const { account } = useConnection();
  const { taraConnectorContract } = useContract();
  const [isLoading, setIsLoading] = useState(false);
  const [state, setState] = useState({ status: "", error: "" });

  const lock = useCallback(
    async (amount: number, onSuccess: () => void) => {
      if (!taraConnectorContract || !account) {
        setState({ status: "Fail", error: "Contract not available" });
        return;
      }

      try {
        setIsLoading(true);
        const tx = await taraConnectorContract.lock(
          utils.parseEther(`${amount}`),
          {
            value: utils.parseEther(`${amount}`),
          }
        );
        await tx.wait();
        setIsLoading(false);
        setState({ status: "Lock successful", error: "" });
        onSuccess();
      } catch (error: any) {
        console.error(error);
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
    [taraConnectorContract, account]
  );

  const resetState = () => {
    setState({ status: "", error: "" });
  };

  useEffect(() => {
    setState({ status: "", error: "" });
  }, [account]);

  return { lock, isLoading, state, resetState };
};
