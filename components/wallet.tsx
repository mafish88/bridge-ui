"use client";

import { MetamaskIcon } from "./ui/icons";
import Button, { ButtonColorVariant } from "./ui/button";
import { useConnection } from "@/hooks/useConnection";
import WrongNetwork from "./wrong-network";
import { shortenAddress } from "@/utils/shorten-address";
import { Identicon } from "./ui/metamask-identicon";
import { formatNumberWithAbbreviation } from "@/utils/format-number-abbreviation";
import { useBalance } from "../hooks/useBalance";

export type WalletActionBtn = {
  action: () => void;
  btnName: string;
  disabled?: boolean;
  btnColor?: ButtonColorVariant;
  isLoading?: boolean;
};

export type WalletProps = {
  showWalletConnected?: boolean;
  actionBtn?: WalletActionBtn;
};

export const Wallet = ({
  showWalletConnected = false,
  actionBtn,
}: WalletProps) => {
  const { status, connect, account, isOnWrongChain } = useConnection();
  const { balance, refetch: refetchBalance } = useBalance();

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
        onClick={actionBtn.action}
        color={actionBtn.btnColor || "secondary"}
        size="lg"
        disabled={!!actionBtn.disabled}
      >
        {actionBtn.btnName}
        {!!actionBtn.isLoading && (
          <span className="loading loading-dots loading-lg"></span>
        )}
      </Button>
    );
  }

  if (
    showWalletConnected &&
    status === "connected" &&
    account &&
    !actionBtn &&
    !isOnWrongChain
  ) {
    return (
      <div className="hidden lg:flex items-center gap-3 bg-primary rounded-xl px-0.5 py-0.5">
        {balance > 0 && (
          <div className="flex items-center ml-2 text-white">
            <span>{formatNumberWithAbbreviation(balance)} Tara</span>
          </div>
        )}
        <Button
          size="md"
          radius="xl"
          onClick={() => {
            refetchBalance();
          }}
        >
          <div className="flex items-center justify-center gap-6 mt-1">
            <Identicon address={account} diameter={32} />
            <p className="mb-1">{shortenAddress(account)}</p>
          </div>
        </Button>
      </div>
    );
  }
};
