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
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    if (account && fromNetwork) {
      setIsLoading(true);
      const timeoutId = setTimeout(() => {
        setClaims(
          mockedClaims.map((claim) => ({ ...claim, recipient: account }))
        );
        setIsLoading(false);
      }, 2000); // Simulate a 2 second API call delay
      // fetch claims
      // Cleanup the timeout when the component unmounts
      return () => clearTimeout(timeoutId);
    }
  }, [account, fromNetwork]);

  return { claims, isLoading };
};
