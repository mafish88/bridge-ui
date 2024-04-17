"use client";

import { useBridgeNetwork } from "@/context/bridge-network";
import Select from "react-select";
import { getSingleSelectStyles } from "@/types/custom-select-styles";
import { useThemeSwitch } from "@/context/theme-switch";
import { Wallet } from "../wallet";
import { CustomOption, CustomSingleValue } from "../ui/custom-select";
import { useIsMounted } from "@/hooks/useIsMounted";
import { BridgeNetwork } from "@/types/bridge-networks";

export type ClaimNetworkProps = {
  onContinue: () => void;
};

export const ClaimNetwork = ({ onContinue }: ClaimNetworkProps) => {
  const { fromNetwork, setFromNetwork, setToNetwork, bridgeNetworks } =
    useBridgeNetwork();

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

  return (
    isMounted && (
      <div className="flex flex-col gap-3">
        <h2 className="text-lg">Select network</h2>
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
        <div className="flex justify-end mt-4">
          <Wallet
            actionBtn={{
              action: onContinue,
              btnColor: "primary",
              btnName: "Show Claims",
            }}
          />
        </div>
      </div>
    )
  );
};
