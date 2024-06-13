import { ethers } from "ethers";
import { useCallback, useState } from "react";
import { useTokenContract } from "./useTokenContract";
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

  const onApprove = useCallback(
    async (
      spender: string,
      amount: ethers.BigNumberish,
      contract: ethers.Contract
    ): Promise<ethers.providers.TransactionResponse> => {
      return await contract!.approve(spender, amount);
    },
    []
  );

  const approve = async (
    spender: string,
    amount: ethers.BigNumberish,
    onSuccess: () => void
  ) => {
    const claimContract = await getClaimContract();
    if (!claimContract) {
      setStatus("Fail");
      setError("Contract not available");
      return;
    }
    asyncCallback(
      async () => {
        return await onApprove(spender, amount, claimContract);
      },
      () => {
        setStatus("Approve successful");
        setError("");
        onSuccess();
      },
      () => {
        setStatus("Fail");
        setError("Transaction failed");
      }
    );
  };

  // This should be extracted to a separate hook
  const getClaimContract = async () => {
    let instance: ethers.Contract | undefined;

    if (!provider || !signer) {
      return instance;
    }
    const contractAddress = coin?.connectorAddress;
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
