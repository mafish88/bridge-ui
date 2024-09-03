"use client";

import { useBridgeNetwork } from "@/context/bridge-network";
import { SwapVerticalIcon } from "../ui/icons";
import { Wallet } from "../wallet";
import { BridgeNetwork } from "@/types/bridge-networks";
import { Select } from "../select";

export type SelectNetworksProps = {
  onContinue: () => void;
};

export const SelectNetworks = ({ onContinue }: SelectNetworksProps) => {
  const {
    fromNetwork,
    toNetwork,
    setFromNetwork,
    setToNetwork,
    bridgeNetworks,
  } = useBridgeNetwork();

  const handleFromChange = (selectedOption: any) => {
    const selectedNetwork = selectedOption as BridgeNetwork;
    setFromNetwork(selectedNetwork);
    setToNetwork(
      bridgeNetworks.find((net) => net.chainId !== selectedNetwork.chainId)!
    );
  };

  const handleToChange = (selectedOption: any) => {
    const selectedNetwork = selectedOption as BridgeNetwork;
    setToNetwork(selectedNetwork);
    const temp = bridgeNetworks.find(
      (net) => net.chainId !== selectedNetwork.chainId
    )!;
    setFromNetwork(temp);
  };

  const swapFromAndTo = () => {
    if (fromNetwork && toNetwork) {
      const temp = fromNetwork;
      setFromNetwork(toNetwork);
      setToNetwork(temp);
    }
  };

  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-lg">Transfer From</h2>
      <Select
        id="select-from-network"
        value={fromNetwork}
        onChange={handleFromChange}
        options={bridgeNetworks}
        getOptionLabel={(option: any) => option.chainName}
        getOptionValue={(option: any) => option.chainId.toString()}
      />
      <div className="flex justify-center">
        <button className="btn" onClick={swapFromAndTo}>
          <SwapVerticalIcon />
        </button>
      </div>
      <h2 className="text-lg">Transfer To</h2>
      <Select
        id="select-to-network"
        value={toNetwork}
        onChange={handleToChange}
        options={bridgeNetworks}
        getOptionLabel={(option: any) => option.chainName}
        getOptionValue={(option: any) => option.chainId.toString()}
      />
      <div className="flex justify-end mt-4">
        <Wallet
          actionBtn={{
            action: onContinue,
            btnColor: "primary",
            btnName: "Begin new transfer",
          }}
        />
      </div>
    </div>
  );
};
