"use client";

import Button from "./ui/button";
import { useConnection } from "@/hooks/useConnection";
import { shortenAddress } from "@/utils/shorten-address";
import { Identicon } from "./ui/metamask-identicon";
import { formatNumberWithAbbreviation } from "@/utils/format-number-abbreviation";
import { useTokenBalance } from "../hooks/useTokenBalance";
import { useBridgeNetwork } from "../context/bridge-network";

export const WalletAddress = ({}) => {
  const { status, account } = useConnection();
  const { balance, refetch: refetchBalance } = useTokenBalance();
  const { coin } = useBridgeNetwork();

  if (status === "connected" && account) {
    return (
      <div className="hidden lg:flex items-center gap-3 bg-primary rounded-xl px-0.5 py-0.5">
        {coin && (
          <div className="flex items-center ml-2 text-white">
            <span>
              {formatNumberWithAbbreviation(balance)} {coin.symbol}
            </span>
          </div>
        )}
        <button
          className="btn rounded-xl"
          onClick={() => {
            refetchBalance();
          }}
        >
          <div className="flex items-center justify-center gap-6 mt-1">
            <Identicon address={account} diameter={32} />
            <p className="mb-1">{shortenAddress(account)}</p>
          </div>
        </button>
      </div>
    );
  }
};
