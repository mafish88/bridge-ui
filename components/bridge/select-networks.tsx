"use client";

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

  const { theme } = useThemeSwitch();
  const customSelectStyles = getSingleSelectStyles(theme);
  const isMounted = useIsMounted();

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
          <Button onClick={swapFromAndTo} size="xs" outline>
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
              action: onContinue,
              btnColor: "primary",
              btnName: "Begin new transfer",
            }}
          />
        </div>
      </div>
    )
  );
};
