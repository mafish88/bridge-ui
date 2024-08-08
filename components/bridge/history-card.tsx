"use client";

import { Card } from "../ui/card";
import { HistoryList } from "./history-list";
import { RefreshIcon } from "../ui/icons";
import { useEffect } from "react";
import { useBridgeContract } from "@/hooks/useBridgeContract";
import { useBridgeNetwork } from "@/context/bridge-network";
import { BigNumber } from "ethers";
import { useBridgeHistory } from "@/context/bridge-history";

export const HistoryCard = () => {
  const { bridgeNetworks } = useBridgeNetwork();

  const { provider: taraxaProvider, config: taraxaConfig } = useBridgeContract(
    bridgeNetworks[0]
  );
  const { provider: ethereumProvider, config: ethereumConfig } =
    useBridgeContract(bridgeNetworks[1]);

  useEffect(() => {
    (async () => {
      const taraxaCurrentBlock = await taraxaProvider!.getBlockNumber();
      const ethereumCurrentBlock = await ethereumProvider!.getBlockNumber();

      const taraxaConfigFile = await taraxaProvider!.send(
        "taraxa_getConfig",
        []
      );
      const pillar = taraxaConfigFile.hardforks.ficus_hf;
      const block_num = BigNumber.from(pillar.block_num).toNumber();
      const pillar_blocks_interval = BigNumber.from(
        pillar.pillar_blocks_interval
      ).toNumber();

      const noOfBlocksSoFar =
        (taraxaCurrentBlock - block_num) / pillar_blocks_interval;

      const nextBlock =
        Math.ceil(noOfBlocksSoFar) * pillar_blocks_interval + block_num;

      const difference = nextBlock - taraxaCurrentBlock;
      const time = Math.round(difference * taraxaConfig.seconds);

      console.log({
        difference,
        nextBlock,
        time,
      });
    })();
  }, [taraxaProvider, ethereumProvider, taraxaConfig, ethereumConfig]);

  const { isLoading, transfers, refresh } = useBridgeHistory();

  return (
    <Card className="p-10">
      <div className="flex flex-row gap-4 items-center justify-start mb-10">
        <h2 className="text-xl">Transfers</h2>
        <button className="btn btn-circle btn-xs">
          <RefreshIcon
            size={12}
            onClick={() => {
              refresh();
            }}
          />
        </button>
      </div>
      <div className="flex flex-row gap-4 items-center justify-start">
        <h3 className="text-lg">Taraxa</h3>
      </div>
      <HistoryList
        isFetching={isLoading}
        transfers={transfers.filter(
          (transfer) => transfer.network === 'taraxa'
        )}
        nativeCurrency="TARA"
      />

      <div className="flex flex-row gap-4 items-center justify-start">
        <h3 className="text-lg">Ethereum</h3>
      </div>
      <HistoryList
        isFetching={isLoading}
        transfers={transfers.filter(
          (transfer) => transfer.network === 'ethereum'
        )}
        nativeCurrency="ETH"
      />
    </Card>
  );
};
