"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  PropsWithChildren,
  useCallback,
} from "react";
import { Transfer, toTransfer } from "@/types/transfer";
import { graphqlApiEthereum, graphqlApiTaraxa } from "@/types/addresses";
import { useConnection } from "@/hooks/useConnection";

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
      block
      timestamp
    }
  }
`;

type BridgeHistoryContextType = {
  transfers: Transfer[];
  isLoading: boolean;
  refresh: () => void;
};

const BridgeHistoryContext = createContext<BridgeHistoryContextType>({
  transfers: [],
  isLoading: false,
  refresh: () => {},
});

export const BridgeHistoryProvider = ({ children }: PropsWithChildren<{}>) => {
  const [isLoadingTaraxa, setIsLoadingTaraxa] = useState(false);
  const [isLoadingEthereum, setIsLoadingEthereum] = useState(false);
  const [transfers, setTransfers] = useState<Transfer[]>([]);

  const { account } = useConnection();

  const fetchTaraxaTransfers = useCallback(async () => {
    if (!account) return;
    setIsLoadingTaraxa(true);
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

    const toTransferWithNetwork = function(a: any) {
      return toTransfer(a, "taraxa");
    };

    const data = await response.json();
    const transfers = data.data.transfers.map(toTransferWithNetwork);

    setTransfers((currentTransfers: Transfer[]) => [
      ...currentTransfers,
      ...transfers,
    ]);
    setIsLoadingTaraxa(false);
  }, [account]);

  const fetchEthereumTransfers = useCallback(async () => {
    if (!account) return;
    setIsLoadingEthereum(true);
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

    const toTransferWithNetwork = function(a: any) {
      return toTransfer(a, "ethereum");
    };

    const data = await response.json();
    const transfers = data.data.transfers.map(toTransferWithNetwork);
    setTransfers((currentTransfers: Transfer[]) => [
      ...currentTransfers,
      ...transfers,
    ]);
    setIsLoadingEthereum(false);
  }, [account]);

  const refresh = useCallback(() => {
    setTransfers([]);
    fetchEthereumTransfers();
    fetchTaraxaTransfers();
  }, [fetchEthereumTransfers, fetchTaraxaTransfers]);

  useEffect(() => {
    if (!account) return;
    refresh();
  }, [account, refresh]);

  const isLoading = isLoadingTaraxa || isLoadingEthereum;

  return (
    <BridgeHistoryContext.Provider
      value={{
        transfers,
        isLoading,
        refresh,
      }}
    >
      {children}
    </BridgeHistoryContext.Provider>
  );
};

export const useBridgeHistory = () => {
  const context = useContext(BridgeHistoryContext);
  if (context === undefined) {
    throw new Error(
      "useBridgeHistory must be used within BridgeHistoryProvider"
    );
  }
  return context;
};
