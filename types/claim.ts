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
