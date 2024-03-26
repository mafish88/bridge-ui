import { useConnection } from "@/hooks/useConnection";
import useMainnet from "@/hooks/useMainnet";
import { networks } from "@/types/networks";
import React from "react";
import Button from "./ui/button";

const WrongNetwork = () => {
  const mainnet = useMainnet();
  const { switchChain, addChain } = useConnection();

  const switchNetwork = async () => {
    const hexChainId = `0x${mainnet.chainId.toString(16)}`;
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
    <Button color="warning" size="lg" onClick={() => switchNetwork()}>
      Switch to Taraxa Mainnet
    </Button>
  );
};

export default WrongNetwork;
