import { useConnection } from "@/hooks/useConnection";
import React from "react";
import { useBridgeNetwork } from "@/context/bridge-network";

const WrongNetwork = () => {
  const { fromNetwork } = useBridgeNetwork();
  const { switchNetwork } = useConnection();

  return (
    <button
      className="btn btn-warning"
      onClick={() => switchNetwork(fromNetwork.chainId)}
    >
      Switch to {fromNetwork.chainName}
    </button>
  );
};

export default WrongNetwork;
