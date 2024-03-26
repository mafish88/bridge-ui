"use client";

import * as React from "react";
import { MetaMaskProvider } from "metamask-react";
import { ThemeSwitchProvider } from "@/context/theme-switch";

export interface ProvidersProps {
  children: React.ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <MetaMaskProvider>
      <ThemeSwitchProvider>{children}</ThemeSwitchProvider>
    </MetaMaskProvider>
  );
}
