import { useCallback, useEffect, useState } from "react";
import { useRPCNetwork } from "./useRpcNetwork";
import { useBridgeNetwork } from "../context/bridge-network";
import {
  ETH_CHAIN_ID,
  TARA_CHAIN_ID,
  ethBridge,
  taraBridge,
} from "../types/addresses";
import { ethers } from "ethers";
import { ABIs } from "../types/abis";

const networkConfig = {
  [TARA_CHAIN_ID]: {
    provider: "taraMainnetProvider",
    chainId: TARA_CHAIN_ID,
    contractAddress: taraBridge,
    seconds: 10,
  },
  [ETH_CHAIN_ID]: {
    provider: "ethMainnetProvider",
    chainId: ETH_CHAIN_ID,
    contractAddress: ethBridge,
    seconds: 4,
  },
};

export const useLastFinalizedBlock = () => {
  const [lastFinalizedBlock, setLastFinalizedBlock] = useState<number>(0);
  const { taraMainnetProvider, ethMainnetProvider } = useRPCNetwork();
  const { fromNetwork } = useBridgeNetwork();
  const [state, setState] = useState({ status: "", error: "" });

  const config = networkConfig[fromNetwork.chainId];
  const provider =
    config.provider === "taraMainnetProvider"
      ? taraMainnetProvider
      : ethMainnetProvider;

  const getBridgeContract = useCallback(async () => {
    const signer = provider.getSigner();
    let instance: ethers.Contract | undefined;
    const abi = ABIs.Bridge.abi;
    if (!provider || !signer) {
      return instance;
    }
    const contract = new ethers.Contract(config.contractAddress, abi, provider);
    return contract.connect(signer);
  }, [provider, config.contractAddress]);

  useEffect(() => {
    const fetchLastFinalizedBlock = async () => {
      try {
        const contract = await getBridgeContract();
        if (!contract) {
          setState({ status: "Fail", error: "Contract not available" });
          return;
        }

        const currentBlockNumber = await provider.getBlockNumber();
        const lastFinalizedBlock = await contract.lastFinalizedBlock();
        const finalizationInterval = await contract.finalizationInterval();

        const timeLeft =
          (currentBlockNumber - lastFinalizedBlock + finalizationInterval) *
          config.seconds;
        setLastFinalizedBlock(timeLeft);
        setState({ status: "Fetching finalized block successful", error: "" });
      } catch (e) {
        setState({ status: "Fail", error: "Something went wrong" });
        console.error(e);
      }
    };
    fetchLastFinalizedBlock();
  }, [config.seconds, getBridgeContract, provider]);

  return lastFinalizedBlock;
};
