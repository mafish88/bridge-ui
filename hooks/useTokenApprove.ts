import { BigNumber, ethers } from "ethers";
import { useCallback, useState } from "react";
import { useWalletPopup } from "../context/wallet-popup";
import { useBridgeNetwork } from "../context/bridge-network";
import useChain from "./useChain";
import { ABIs } from "../types/abis";

export const useTokenApprove = () => {
  const { coin } = useBridgeNetwork();
  const { asyncCallback } = useWalletPopup();
  const [status, setStatus] = useState<string>("");
  const [error, setError] = useState<string>("");
  const { provider, signer } = useChain();
  const decimals = coin?.decimals || 18;

  const onApprove = useCallback(
    async (
      spender: string,
      amount: BigNumber,
      contract: ethers.Contract
    ): Promise<ethers.providers.TransactionResponse> => {
      return await contract.approve(spender, amount);
    },
    []
  );

  const approve = async (
    spender: string,
    amount: ethers.BigNumberish,
    onSuccess: () => void,
    onFail: () => void
  ) => {
    const coinContract = await getCoinContract();
    if (!coinContract) {
      setStatus("Fail");
      setError("Contract not available");
      return;
    }
    asyncCallback(
      async () => {
        const valueInSmallestUnit = ethers.utils.parseUnits(
          amount.toString(),
          decimals
        );
        return await onApprove(spender, valueInSmallestUnit, coinContract);
      },
      () => {
        setStatus("Approve successful");
        setError("");
        onSuccess();
      },
      () => {
        setStatus("Fail");
        setError("Transaction failed");
        onFail();
      }
    );
  };

  const getCoinContract = async () => {
    let instance: ethers.Contract | undefined;

    if (!provider || !signer) {
      return instance;
    }
    const contractAddress = coin?.deployAddress;
    const abi = ABIs.ERC20.abi;
    if (!contractAddress) {
      setStatus("Fail");
      setError("Contract address missing from coin");
      return;
    }
    const contract = new ethers.Contract(contractAddress, abi, provider);
    return contract.connect(signer);
  };

  return { status, error, approve };
};
