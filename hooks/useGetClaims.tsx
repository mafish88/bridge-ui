import { useEffect, useState } from "react";
import { useBridgeNetwork } from "../context/bridge-network";
import { useConnection } from "./useConnection";

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

export type ClaimToken = {
  token: string;
  amount: number;
  network: string;
  chainId: number;
};

export const mockedClaims: Claim[] = [
  {
    token: "USDT",
    amount: 100,
    network: "Ethereum",
    chainId: 1,
    recipient: "0x1234567890",
    txHash: "0x1234567890",
    status: "completed",
    timestamp: Date.now(),
  },
  {
    token: "WTARA",
    amount: 2320,
    network: "Ethereum",
    chainId: 1,
    recipient: "0x1234567890",
    txHash: "0x1234567890",
    status: "completed",
    timestamp: Date.now(),
  },
  {
    token: "Ether",
    amount: 3,
    network: "Ethereum",
    chainId: 1,
    recipient: "0x1234567890",
    txHash: "0x1234567890",
    status: "completed",
    timestamp: Date.now(),
  },
  {
    token: "USDT",
    amount: 20,
    network: "Ethereum",
    chainId: 1,
    recipient: "0x1234567890",
    txHash: "0x1234567890",
    status: "completed",
    timestamp: Date.now(),
  },
];

export const useGetClaims = () => {
  const { account } = useConnection();
  const { fromNetwork } = useBridgeNetwork();
  const [claims, setClaims] = useState<Claim[]>([]);

  useEffect(() => {
    if (account && fromNetwork) {
      // fetch claims
      setClaims(
        mockedClaims.map((claim) => ({ ...claim, recipient: account }))
      );
    }
  }, [account, fromNetwork]);

  return { claims };
};
