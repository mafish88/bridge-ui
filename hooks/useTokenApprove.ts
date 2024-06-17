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
  const decimals = coin?.decimals || 18;

  const onApprove = useCallback(
    async (
      spender: string,
      amount: ethers.BigNumberish,
      contract: ethers.Contract,
      gasLimit: ethers.BigNumber
    ): Promise<ethers.providers.TransactionResponse> => {
      return await contract!.approve(spender, amount, { gasLimit });
    },
    []
  );

  const approve = async (
    spender: string,
    amount: ethers.BigNumberish,
    onSuccess: () => void,
    onFail: () => void
  ) => {
    const claimContract = await getClaimContract();
    if (!claimContract) {
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
        const gasLimit = ethers.BigNumber.from("1000000"); // Set a higher gas limit
        return await onApprove(
          spender,
          valueInSmallestUnit,
          claimContract,
          gasLimit
        );
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
