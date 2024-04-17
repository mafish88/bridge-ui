import { useBridgeNetwork } from "@/context/bridge-network";
import Button from "../ui/button";
import { Wallet } from "../wallet";
import { Claim } from "@/hooks/useGetClaims";

export type ClaimSummaryProps = {
  claim: Claim;
  onBack: () => void;
};

export const ClaimSummary = ({ claim, onBack }: ClaimSummaryProps) => {
  const onConfirm = () => {};

  return (
    <div className="flex flex-col gap-6">
      <div className="text-sm">
        <p>Notice:</p>
        <p>
          Once you confirm, the claim will start. Transfers from Ethereum to
          Taraxa take about 30 minutes.
        </p>
      </div>
      <div className="w-full flex flex-col sm:flex-row justify-between gap-4">
        <Button className="flex-1" onClick={onBack}>
          Back
        </Button>
        <Wallet
          actionBtn={{
            disabled: !claim,
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
