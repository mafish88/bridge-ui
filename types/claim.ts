export type Claim = {
  token: string;
  amount: number;
  network: string;
  chainId: number;
  recipient: string;
  txHash: string;
  status: "pending" | "completed" | "failed";
  timestamp: number;
};

export interface ApiBalance {
  id: string;
  connector: string;
  address: string;
  amount: string;
}

export interface ApiClaim extends ApiBalance {
  tokenSource: string;
  tokenDestination: string;
  timestamp: string;
}

export const toClaim = (data: ApiClaim | ApiBalance): Claim => {
  const type = "tokenSource" in data ? "tokenSource" : "connector";
  return {
    token: data.connector,
    amount: Number(data.amount),
    network: "Ethereum",
    chainId: 1,
    recipient: data.address,
    txHash: "",
    status: "timestamp" in data && data.timestamp ? "completed" : "pending",
    timestamp: Number(
      "timestamp" in data && data.timestamp ? data.timestamp : Date.now()
    ),
  };
};
