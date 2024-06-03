import { useEffect, useState } from "react";
import { useBridgeNetwork } from "../context/bridge-network";

import { ethers } from "ethers";
import { useBridgeContract } from "./useBridgeContract";

export interface BlockInfo {
  currentBlockNumber: number;
  lastFinalizedBlockNumber: number;
  finalizationInterval: number;
  timeLeft: string;
  status: string;
  error: string;
}

export const useLastFinalizedBlock = () => {
  const [blockInfo, setBlockInfo] = useState<BlockInfo>({
    currentBlockNumber: 0,
    lastFinalizedBlockNumber: 0,
    finalizationInterval: 0,
    timeLeft: "",
    status: "",
    error: "",
  });
  const { toNetwork } = useBridgeNetwork();
  const { getBridgeContract, config, provider } = useBridgeContract(toNetwork);
  const [isLoading, setIsLoading] = useState(false);

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
