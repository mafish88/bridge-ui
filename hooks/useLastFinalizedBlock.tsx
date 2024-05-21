import { useCallback, useEffect, useState } from "react";
import { useNetworkProviders } from "./useNetworkProviders";
import { useBridgeNetwork } from "../context/bridge-network";
import {
  ETH_CHAIN_ID,
  TARA_CHAIN_ID,
  ethBridge,
  taraBridge,
} from "../types/addresses";
import { ethers } from "ethers";
import { ABIs } from "../types/abis";

export interface BlockInfo {
  currentBlockNumber: number;
  lastFinalizedBlockNumber: number;
  finalizationInterval: number;
  timeLeft: string;
  status: string;
  error: string;
}

const networkConfig = {
  [TARA_CHAIN_ID]: {
    chainId: TARA_CHAIN_ID,
    contractAddress: taraBridge,
    seconds: 10,
  },
  [ETH_CHAIN_ID]: {
    chainId: ETH_CHAIN_ID,
    contractAddress: ethBridge,
    seconds: 4,
  },
};

export const useLastFinalizedBlock = () => {
  const [blockInfo, setBlockInfo] = useState<BlockInfo>({
    currentBlockNumber: 0,
    lastFinalizedBlockNumber: 0,
    finalizationInterval: 0,
    timeLeft: "",
    status: "",
    error: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const { taraMainnetProvider, ethMainnetProvider } = useNetworkProviders();
  const { toNetwork } = useBridgeNetwork();
  const providers = {
    [TARA_CHAIN_ID]: taraMainnetProvider,
    [ETH_CHAIN_ID]: ethMainnetProvider,
  };
  const provider = providers[toNetwork.chainId];
  const config = networkConfig[toNetwork.chainId];

  const getBridgeContract = useCallback(async () => {
    if (!provider || !ethers.utils.isAddress(config.contractAddress)) {
      console.error("Invalid provider or contract address.");
      return;
    }

    try {
      const abi = JSON.parse(ABIs.Bridge.abi);
      const contract = new ethers.Contract(
        config.contractAddress,
        abi,
        provider
      );
      console.log("Contract initialized:", contract);
      return contract;
    } catch (error) {
      console.error("Error creating contract instance:", error);
    }
  }, [provider, config.contractAddress]);

  useEffect(() => {
    const fetchLastFinalizedBlock = async () => {
      try {
        setIsLoading(true);
        const contract = await getBridgeContract();
        if (!contract || !provider) {
          setBlockInfo((prev) => ({
            ...prev,
            status: "Fail",
            error: "Contract not available",
          }));
          return;
        }

        const currentBlockNumber = await provider.getBlockNumber();
        const lastFinalizedBlock = await contract.lastFinalizedBlock();
        const finalizationInterval = await contract.finalizationInterval();

        const currentBlockBN = ethers.BigNumber.from(currentBlockNumber);

        const blocksSinceFinalization = currentBlockBN.sub(lastFinalizedBlock);
        const totalBlocks = blocksSinceFinalization.add(finalizationInterval);
        const secondsPerBlock = ethers.BigNumber.from(config.seconds);
        const timeLeft = totalBlocks.mul(secondsPerBlock);

        setBlockInfo({
          currentBlockNumber: currentBlockNumber,
          lastFinalizedBlockNumber: lastFinalizedBlock.toNumber(),
          finalizationInterval: finalizationInterval.toNumber(),
          timeLeft: timeLeft.toString(), // Store as string to avoid JavaScript number issues
          status: "Fetching finalized block successful",
          error: "",
        });
        setIsLoading(false);
      } catch (e) {
        setBlockInfo((prev) => ({
          ...prev,
          status: "Fail",
          error: "Something went wrong",
        }));
        console.error(e);
      }
      setIsLoading(false);
    };
    void fetchLastFinalizedBlock();
  }, [config.seconds, getBridgeContract, provider]);

  return { blockInfo, isLoading };
};
