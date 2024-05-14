import { ethers } from "ethers";
import { useCallback, useEffect, useState } from "react";
import { useContract } from "./useContract";
import { useConnection } from "./useConnection";
import { useWalletPopup } from "../context/wallet-popup";
import { useBridgeNetwork } from "../context/bridge-network";
import { ABIs } from "../types/abis";
import useChain from "./useChain";

export const useClaimErc20 = () => {
  const { coin } = useBridgeNetwork();
  const { provider, signer } = useChain();
  const { account } = useConnection();
  const { erc20MintingConnectorContract, taraConnectorContract } =
    useContract();
  const [isLoading, setIsLoading] = useState(false);
  const [state, setState] = useState({ status: "", error: "" });
  const { asyncCallback } = useWalletPopup();

  const onClaim = useCallback(
    async (account: string, contract: ethers.Contract) => {
      const feeToClain = await taraConnectorContract!.feeToClaim(account);
      const valueInEther = ethers.utils.formatEther(feeToClain.toString());
      return await contract!.claim({
        value: ethers.utils.parseEther(valueInEther),
      });
    },
    [taraConnectorContract]
  );

  const claim = async (onSuccess: () => void) => {
    if (!taraConnectorContract || !erc20MintingConnectorContract || !account) {
      setState({ status: "Fail", error: "Contract not available" });
      return;
    }

    const claimContract = await getClaimContract();

    if (!claimContract) {
      setState({ status: "Fail", error: "Contract not available" });
      return;
    }

    setIsLoading(true);
    asyncCallback(
      async () => {
        return await onClaim(account, claimContract);
      },
      () => {
        setIsLoading(false);
        setState({ status: "Lock successful", error: "" });
        onSuccess();
      },
      () => {
        setIsLoading(false);
        setState({ status: "Fail", error: "Transaction failed" });
      }
    );
  };

  const getClaimContract = async () => {
    let instance: ethers.Contract | undefined;

    if (!provider || !signer) {
      return instance;
    }
    const contractAddress = coin?.connectorAddress;
    const abi = ABIs.ClaimingConnector.abi;
    if (!contractAddress) {
      setState({ status: "Fail", error: "Contract address missing from coin" });
      return;
    }
    const contract = new ethers.Contract(contractAddress, abi, provider);
    return contract.connect(signer);
  };

  const resetState = () => {
    setState({ status: "", error: "" });
  };

  useEffect(() => {
    setState({ status: "", error: "" });
  }, [account]);

  return { claim, isLoading, state, resetState };
};
