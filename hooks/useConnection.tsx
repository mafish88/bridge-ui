"use client";

import { useEffect, useLayoutEffect, useState } from "react";
import useCMetamask from "./useCMetamask";
import { useBridgeNetwork } from "@/context/bridge-network";
import { networks } from "../types/networks";

export const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

export function useConnection() {
  const { fromNetwork } = useBridgeNetwork();
  const [isConnected, setIsConnected] = useState(false);

  const { status, connect, account, chainId, ethereum, switchChain, addChain } =
    useCMetamask();

  const shortAddress = account
    ? `${account!.substring(0, 7)} ... ${account!.substring(
        account!.length - 5
      )}`
    : account!;

  const isOnWrongChain = chainId !== fromNetwork.chainId;

  useIsomorphicLayoutEffect(() => {
    setIsConnected(status === "connected");
  }, [status]);

  const switchNetwork = async (chainId: number) => {
    const hexChainId = `0x${chainId.toString(16)}`;
    const { chainName, rpcUrl, blockExplorerUrl, iconUrl, nativeCurrency } =
      networks[chainId]!;

    try {
      await switchChain(hexChainId);
    } catch (e: any) {
      if (e.code === 4902) {
        try {
          await addChain({
            chainName,
            nativeCurrency,
            chainId: hexChainId,
            blockExplorerUrls: [blockExplorerUrl],
            iconUrls: [iconUrl],
            rpcUrls: [rpcUrl],
          });
        } catch (e) {
          // eslint-disable-next-line no-console
          console.error(e);
        }
      }
    }
  };

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
    switchNetwork,
  };
}
