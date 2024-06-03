import { ethers } from "ethers";
import { useState, useEffect } from "react";
import { useConnection } from "./useConnection";
import { useContract } from "./useContract";

export const useClaimEvents = () => {
  const { isOnWrongChain } = useConnection();
  const { taraConnectorContract } = useContract();
  const [claims, setClaims] = useState<any[]>([]);
  const [lastBlock, setLastBlock] = useState<number>(0);

  useEffect(() => {
    const fetchClaimEvents = async () => {
      if (taraConnectorContract && !isOnWrongChain) {
        try {
          const currentBlock =
            await taraConnectorContract.provider.getBlockNumber();
          // Ensure that the range is exactly 5000 blocks, unless it's the first run
          const fromBlock = Math.max(0, currentBlock - 5000);
          const toBlock = currentBlock;

          console.log(
            `🚀 ~ fetchClaimEvents ~ fromBlock: ${fromBlock}, toBlock: ${toBlock}`
          );

          if (fromBlock < toBlock) {
            const filter = taraConnectorContract.filters.ClaimAccrued();
            const events = await taraConnectorContract.queryFilter(
              filter,
              fromBlock,
              toBlock
            );
            console.log("🚀 ~ fetchClaimEvents ~ events:", events);

            // const formattedEvents = events.map(event => ({
            //   address: event.args.account,
            //   amount: ethers.utils.formatEther(event.args.amount),
            //   blockNumber: event.blockNumber
            // }));

            // setClaims(prevClaims => [...prevClaims, ...formattedEvents]);
            setLastBlock(toBlock); // Update last fetched block to the current block
          } else {
            console.log("No new blocks to fetch.");
          }
          setLastBlock(currentBlock); // Update last fetched block
        } catch (error) {
          console.error("Error fetching ClaimAccrued events:", error);
        }
      }
    };

    const interval = setInterval(fetchClaimEvents, 3000); // Fetch every minute
    return () => clearInterval(interval);
  }, [taraConnectorContract, isOnWrongChain, lastBlock]);

  return { claims };
};
