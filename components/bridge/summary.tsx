import { useBridgeNetwork } from "@/context/bridge-network";
import Button from "../ui/button";
import { Wallet } from "../wallet";
import { useBridge } from "../../hooks/useBridge";

export type SummaryProps = {
  onBack: () => void;
};

export const Summary = ({ onBack }: SummaryProps) => {
  const { coin, amount } = useBridgeNetwork();
  const { onBridge, isLoading } = useBridge();

  const onConfirm = async () => {
    await onBridge(amount);
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="text-sm">
        <p>Notice:</p>
        <p>
          Once you confirm, the transfer will start. Transfers from Ethereum to
          Taraxa take about 30 minutes.
        </p>
      </div>
      <div className="w-full flex flex-col sm:flex-row justify-between gap-4">
        <Button fullWidth onClick={onBack}>
          Back
        </Button>
        <Wallet
          actionBtn={{
            disabled: !coin || !amount || isLoading,
            action: onConfirm,
            btnColor: "primary",
            btnName: "Confirm",
            className: "flex-1",
            isLoading: isLoading,
          }}
        />
      </div>
    </div>
  );
};
