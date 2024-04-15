import { useBridgeNetwork } from "@/context/bridge-network";
import Button from "../ui/button";
import { Wallet } from "../wallet";
import Image from "next/image";

export type SummaryProps = {
  onBack: () => void;
};

export const Summary = ({ onBack }: SummaryProps) => {
  const { fromNetwork, toNetwork, coin, amount } = useBridgeNetwork();

  const onConfirm = () => {};

  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-lg font-medium">Summary</h2>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <p className="w-[120px]">Transfer from:</p>
          <div className="flex items-center gap-4 h-[30px]">
            <Image
              src={fromNetwork.iconUrl}
              alt={fromNetwork.chainName}
              height={30}
              width={fromNetwork.isImageTall ? 20 : 30}
            />
            {fromNetwork.chainName}
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <p className="w-[120px]">Transfer to:</p>
          <div className="flex items-center gap-4 h-[30px]">
            <Image
              src={toNetwork.iconUrl}
              alt={toNetwork.chainName}
              height={30}
              width={toNetwork.isImageTall ? 20 : 30}
            />
            {toNetwork.chainName}
          </div>
        </div>
        {amount && coin && (
          <div className="flex flex-col sm:flex-row gap-4">
            <p className="w-[120px]">Amount:</p>
            <div className="flex gap-2">
              <p>{amount}</p>
              <p>{coin.symbol}</p>
              <Image
                src={coin.iconUrl}
                alt={coin.name}
                height={30}
                width={coin.isImageTall ? 20 : 30}
              />
            </div>
          </div>
        )}
      </div>
      <div className="text-sm">
        <p>Notice:</p>
        <p>
          Once you confirm, the transfer will start. Transfers from Ethereum to
          Taraxa take about 30 minutes.
        </p>
      </div>
      <div className="w-full flex flex-col sm:flex-row justify-between gap-4">
        <Button className="flex-1" onClick={onBack}>
          Back
        </Button>
        <Wallet
          actionBtn={{
            disabled: !coin || !amount,
            action: onConfirm,
            btnColor: "primary",
            btnName: "Confirm",
            className: "flex-1",
          }}
        />
      </div>
    </div>
  );
};
