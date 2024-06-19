"use client";

import { useConnection } from "@/hooks/useConnection";
import { shortenAddress } from "@/utils/shorten-address";
import { Identicon } from "./ui/metamask-identicon";
import { formatNumberWithAbbreviation } from "@/utils/format-number-abbreviation";
import { useBridgeNetwork } from "../context/bridge-network";
import { useBalance } from "../hooks/useBalance";

export const WalletAddress = ({}) => {
  const { status, account, isOnWrongChain } = useConnection();
  const { balance, refetch: refetchBalance } = useBalance();
  const { fromNetwork } = useBridgeNetwork();

  if (status === "connected" && account) {
    return (
      <div className="hidden lg:flex items-center gap-3 bg-primary rounded-xl px-0.5 py-0.5">
        {fromNetwork && !isOnWrongChain && (
          <div className="flex items-center ml-2 text-white">
            <span>
              {formatNumberWithAbbreviation(balance)}{" "}
              {fromNetwork.nativeCurrency.symbol}
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
