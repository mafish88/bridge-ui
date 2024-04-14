"use client";

import * as React from "react";
import { MetaMaskProvider } from "metamask-react";
import { ThemeSwitchProvider } from "@/context/theme-switch";
import { BridgeNetworkProvider } from "@/context/bridge-network";

export interface ProvidersProps {
  children: React.ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <MetaMaskProvider>
      <BridgeNetworkProvider>
        <ThemeSwitchProvider>{children}</ThemeSwitchProvider>
      </BridgeNetworkProvider>
    </MetaMaskProvider>
  );
}
