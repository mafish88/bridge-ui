"use client";

import { Card } from "../ui/card";
import { Countdown } from "./countdown-epoch";
import { HistoryList } from "./history-list";
import { useLastFinalizedBlock } from "../../hooks/useLastFinalizedBlock";
import { graphqlApiEthereum, graphqlApiTaraxa } from "@/types/addresses";
import { RefreshIcon } from "../ui/icons";
import { useConnection } from "@/hooks/useConnection";
import { Transfer, toTransfer } from "@/types/transfer";
import { useCallback, useEffect, useState } from "react";

const TRANSFERS_QUERY = `
  query ($account: Bytes!) {
    transfers(
      where: { address: $account }
      orderBy: timestamp
      orderDirection: desc
    ) {
      id
      type
      transactionHash
      connector
      tokenSource
      tokenDestination
      address
      amount
      fee
      timestamp
    }
  }
`;

export const HistoryCard = () => {
  const [isFetchingEthereum, setIsFetchingEthereum] = useState(false);
  const [ethereumTransfers, setEthereumTransfers] = useState<Transfer[]>([]);
  const [isFetchingTaraxa, setIsFetchingTaraxa] = useState(false);
  const [taraxaTransfers, setTaraxaTransfers] = useState<Transfer[]>([]);

  const { blockInfo, isLoading } = useLastFinalizedBlock();
  const { account } = useConnection();

  const fetchEthereumTransfers = useCallback(async () => {
    if (!account) return;
    setIsFetchingEthereum(true);
    const response = await fetch(graphqlApiEthereum, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: TRANSFERS_QUERY,
        variables: { account },
      }),
      next: { revalidate: 3600 * 6 },
    });
    const data = await response.json();
    const transfers = data.data.transfers.map(toTransfer);
    setEthereumTransfers(transfers);
    setIsFetchingEthereum(false);
  }, [account]);

  const fetchTaraxaTransfers = useCallback(async () => {
    if (!account) return;
    setIsFetchingTaraxa(true);
    const response = await fetch(graphqlApiTaraxa, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: TRANSFERS_QUERY,
        variables: { account },
      }),
      next: { revalidate: 3600 * 6 },
    });
    const data = await response.json();
    const transfers = data.data.transfers.map(toTransfer);
    setTaraxaTransfers(transfers);
    setIsFetchingTaraxa(false);
  }, [account]);

  useEffect(() => {
    if (!account) return;
    fetchEthereumTransfers();
    fetchTaraxaTransfers();
  }, [account, fetchEthereumTransfers, fetchTaraxaTransfers]);

  const showTopCard = !isLoading;

  const topCard: JSX.Element = (
    <div className="flex flex-col gap-4">
      {blockInfo.timeLeft && (
        <div>
          <Countdown
            seconds={parseInt(blockInfo.timeLeft, 10)}
            isLoading={isLoading}
          />
        </div>
      )}
    </div>
  );

  return (
    <Card className="p-10" showTopCard={showTopCard} topCardContent={topCard}>
      <div className="flex flex-row gap-4 items-center justify-start">
        <h2 className="text-lg">Taraxa to Ethereum</h2>
        <button className="btn btn-circle btn-xs">
          <RefreshIcon
            size={12}
            onClick={() => {
              fetchTaraxaTransfers();
            }}
          />
        </button>
      </div>
      <HistoryList
        isFetching={isFetchingTaraxa}
        transfers={taraxaTransfers}
        nativeCurrency="TARA"
      />

      <div className="flex flex-row gap-4 items-center justify-start">
        <h2 className="text-lg">Ethereum to Taraxa</h2>
        <button className="btn btn-circle btn-xs">
          <RefreshIcon
            size={12}
            onClick={() => {
              fetchEthereumTransfers();
            }}
          />
        </button>
      </div>
      <HistoryList
        isFetching={isFetchingEthereum}
        transfers={ethereumTransfers}
        nativeCurrency="ETH"
      />
    </Card>
  );
};
