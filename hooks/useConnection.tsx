"use client";

import { useEffect, useLayoutEffect, useState } from "react";
import useCMetamask from "./useCMetamask";
import useMainnet from "./useMainnet";

export const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

export function useConnection() {
  const [isConnected, setIsConnected] = useState(false);
  const { chainId: mainnetChainId } = useMainnet();

  const { status, connect, account, chainId, ethereum, switchChain, addChain } =
    useCMetamask();

  const shortAddress = account
    ? `${account!.substring(0, 7)} ... ${account!.substring(
        account!.length - 5
      )}`
    : account!;

  const isOnWrongChain = chainId !== mainnetChainId;

  useIsomorphicLayoutEffect(() => {
    setIsConnected(status === "connected");
  }, [status]);

  return {
    isConnected,
    status,
    connect,
    account,
    chainId,
    ethereum,
    switchChain,
    addChain,
    shortAddress,
    isOnWrongChain,
  };
}
