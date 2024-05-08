import { useConnection } from "@/hooks/useConnection";
import React from "react";
import Button from "./ui/button";
import { useBridgeNetwork } from "@/context/bridge-network";

const WrongNetwork = () => {
  const { fromNetwork } = useBridgeNetwork();
  const { switchNetwork } = useConnection();

  return (
    <Button color="warning" onClick={() => switchNetwork(fromNetwork.chainId)}>
      Switch to {fromNetwork.chainName}
    </Button>
  );
};

export default WrongNetwork;
