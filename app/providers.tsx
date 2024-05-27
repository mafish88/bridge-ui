"use client";

import * as React from "react";
import { MetaMaskProvider } from "metamask-react";
import { BridgeNetworkProvider } from "@/context/bridge-network";
import { ModalsProvider } from "../context/modal";
import { ModalsCenter } from "../components/modals";
import { WalletPopupProvider } from "../context/wallet-popup";
import { DynamicThemeWrapper } from "@/context/dynamic-theme-wrapper";

export interface ProvidersProps {
  children: React.ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <MetaMaskProvider>
      <BridgeNetworkProvider>
        <DynamicThemeWrapper>
          <ModalsProvider>
            <WalletPopupProvider>{children}</WalletPopupProvider>
            <ModalsCenter />
          </ModalsProvider>
        </DynamicThemeWrapper>
      </BridgeNetworkProvider>
    </MetaMaskProvider>
  );
}
