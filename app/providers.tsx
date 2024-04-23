"use client";

import * as React from "react";
import { MetaMaskProvider } from "metamask-react";
import { ThemeSwitchProvider } from "@/context/theme-switch";
import { BridgeNetworkProvider } from "@/context/bridge-network";
import { ClientThemeWrapper } from "@/context/client-theme-wrapper";
import { ModalsProvider } from "../context/modal";
import { ModalsCenter } from "../components/modals";
import { WalletPopupProvider } from "../context/wallet-popup";

export interface ProvidersProps {
  children: React.ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <MetaMaskProvider>
      <BridgeNetworkProvider>
        <ThemeSwitchProvider>
          <ClientThemeWrapper>
            <ModalsProvider>
              <>
                <WalletPopupProvider>{children}</WalletPopupProvider>
                <ModalsCenter />
              </>
            </ModalsProvider>
          </ClientThemeWrapper>
        </ThemeSwitchProvider>
      </BridgeNetworkProvider>
    </MetaMaskProvider>
  );
}
