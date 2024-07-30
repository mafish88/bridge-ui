import { Coin, getTokenByConnectorAddress } from "../config/coinConfigs";

export type Transfer = {
  token: string;
  amount: string;
  network: string;
  chainId: number;
  txHash: string;
  status: "pending" | "completed";
  coin: Coin;
  timestamp: number | null;
};

export interface ApiTransfer {
  id: string;
  type: string;
  transactionHash: string;
  connector: string;
  tokenSource: string;
  tokenDestination: string;
  address: string;
  amount: string;
  fee: string;
  timestamp: string;
}

export const toTransfer = (data: ApiTransfer): Transfer => {
  return {
    token: data.connector,
    amount: data.amount,
    fee: data.fee,
    network: "Ethereum",
    chainId: 1,
    txHash: "",
    status: "timestamp" in data && data.timestamp ? "completed" : "pending",
    timestamp:
      "timestamp" in data && data.timestamp ? Number(data.timestamp) : null,
    coin: getTokenByConnectorAddress(data.connector),
  };
};
