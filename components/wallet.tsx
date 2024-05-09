"use client";

import { MetamaskIcon } from "./ui/icons";
import Button, { ButtonColorVariant, ButtonSizeVariant } from "./ui/button";
import { useConnection } from "@/hooks/useConnection";
import WrongNetwork from "./wrong-network";

export type WalletActionBtn = {
  action: () => void;
  btnName: string;
  disabled?: boolean;
  btnColor?: ButtonColorVariant;
  isLoading?: boolean;
  size?: ButtonSizeVariant;
  fullWidth?: boolean;
};

export type WalletProps = {
  actionBtn?: WalletActionBtn;
};

export const Wallet = ({ actionBtn }: WalletProps) => {
  const { status, connect, isOnWrongChain } = useConnection();

  if (status === "notConnected") {
    return (
      <Button onClick={() => connect()} color="primary" size="lg">
        <MetamaskIcon className="text-default-500" />
        Connect Wallet
      </Button>
    );
  }

  if (status === "unavailable") {
    return (
      <Button size="lg" disabled>
        Metamask not available
      </Button>
    );
  }
  if (status === "connecting") {
    return (
      <Button size="lg" disabled>
        Connecting <span className="loading loading-dots loading-lg"></span>
      </Button>
    );
  }

  if (status === "connected" && isOnWrongChain) {
    return <WrongNetwork />;
  }

  if (actionBtn) {
    return (
      <Button
        fullWidth={actionBtn.fullWidth}
        onClick={actionBtn.action}
        color={actionBtn.btnColor || "secondary"}
        size={actionBtn.size}
        disabled={!!actionBtn.disabled}
      >
        {actionBtn.btnName}
        {!!actionBtn.isLoading && (
          <span className={`loading loading-dots loading-lg`}></span>
        )}
      </Button>
    );
  }
};
