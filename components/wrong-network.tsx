import { useConnection } from "@/hooks/useConnection";
import useMainnet from "@/hooks/useMainnet";
import { networks } from "@/types/networks";
import React from "react";
import Button from "./ui/button";
import { useBridgeNetwork } from "@/context/bridge-network";

const WrongNetwork = () => {
  const mainnet = useMainnet();
  const { fromNetwork } = useBridgeNetwork();

  const { switchChain, addChain } = useConnection();

  const switchNetwork = async () => {
    const hexChainId = `0x${fromNetwork.chainId.toString(16)}`;
    const { chainName, rpcUrl, blockExplorerUrl, iconUrl, nativeCurrency } =
      networks[mainnet.chainId]!;

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

  return (
    <Button color="warning" onClick={() => switchNetwork()}>
      Switch to {fromNetwork.chainName}
    </Button>
  );
};

export default WrongNetwork;
