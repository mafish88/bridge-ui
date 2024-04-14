"use client";

import { useState } from "react";
import { useBridgeNetwork } from "@/context/bridge-network";
import Select from "react-select";
import Button from "../ui/button";
import { SwapVerticalIcon } from "../ui/icons";
import { getSingleSelectStyles } from "@/types/custom-select-styles";
import { useThemeSwitch } from "@/context/theme-switch";
import { Wallet } from "../wallet";
import { CustomOption, CustomSingleValue } from "../ui/custom-select";
import { useIsMounted } from "@/hooks/useIsMounted";
import { BridgeNetwork } from "@/types/bridge-networks";

export type SelectNetworksProps = {
  setStep: () => void;
};

export const SelectNetworks = ({ setStep }: SelectNetworksProps) => {
  const { setSelectedFromNetwork, bridgeNetworks } = useBridgeNetwork();
  const [fromNetwork, setFromNetwork] = useState<BridgeNetwork>(
    bridgeNetworks[1]
  );
  const [toNetwork, setToNetwork] = useState<BridgeNetwork>(bridgeNetworks[0]);
  const { theme } = useThemeSwitch();
  const customSelectStyles = getSingleSelectStyles(theme);
  const isMounted = useIsMounted();

  const handleFromChange = (selectedOption: any) => {
    const selectedNetwork = selectedOption as BridgeNetwork;
    setFromNetwork(selectedNetwork);
    setSelectedFromNetwork(selectedNetwork);
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
    setSelectedFromNetwork(temp);
  };

  const swapFromAndTo = () => {
    if (fromNetwork && toNetwork) {
      const temp = fromNetwork;
      setFromNetwork(toNetwork);
      setSelectedFromNetwork(toNetwork);
      setToNetwork(temp);
    }
  };

  return (
    isMounted && (
      <div className="flex flex-col gap-3">
        <h2 className="text-lg">Transfer From</h2>
        <Select
          id="select-from-network"
          styles={customSelectStyles}
          value={fromNetwork}
          onChange={handleFromChange}
          options={bridgeNetworks}
          getOptionLabel={(option) => option.chainName}
          getOptionValue={(option) => option.chainId.toString()}
          components={{ Option: CustomOption, SingleValue: CustomSingleValue }}
        />
        <div className="flex justify-start">
          <Button onClick={swapFromAndTo} size="xs">
            <SwapVerticalIcon />
          </Button>
        </div>
        <h2 className="text-lg">Transfer To</h2>
        <Select
          id="select-to-network"
          styles={customSelectStyles}
          value={toNetwork}
          onChange={handleToChange}
          options={bridgeNetworks}
          getOptionLabel={(option) => option.chainName}
          getOptionValue={(option) => option.chainId.toString()}
          components={{ Option: CustomOption, SingleValue: CustomSingleValue }}
        />
        <div className="flex justify-end mt-4">
          <Wallet
            actionBtn={{
              action: setStep,
              btnColor: "primary",
              btnName: "Begin new transfer",
            }}
          />
        </div>
      </div>
    )
  );
};
