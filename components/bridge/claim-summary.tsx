import { Claim } from "@/types/claim";
import Button from "../ui/button";
import { Wallet } from "../wallet";
import { useClaim } from "@/hooks/useClaim";

export type ClaimSummaryProps = {
  claim: Claim;
  onBack: () => void;
};

export const ClaimSummary = ({ claim, onBack }: ClaimSummaryProps) => {
  const { onClaim } = useClaim();

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
        <Button fullWidth onClick={onBack}>
          Back
        </Button>
        <Wallet
          actionBtn={{
            disabled: !claim,
            action: onClaim,
            btnColor: "primary",
            btnName: "Confirm",
            fullWidth: true,
          }}
        />
      </div>
    </div>
  );
};
