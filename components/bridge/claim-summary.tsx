import Button from "../ui/button";
import { Wallet } from "../wallet";
import { Claim } from "@/hooks/useGetClaims";
import { ModalsActionsEnum, useModalsDispatch } from "@/context/modal";

export type ClaimSummaryProps = {
  claim: Claim;
  onBack: () => void;
};

export const ClaimSummary = ({ claim, onBack }: ClaimSummaryProps) => {
  const dispatchModals = useModalsDispatch();

  const onConfirm = () => {
    // dispatchModals({
    //   type: ModalsActionsEnum.SHOW_METAMASK_INFO,
    //   payload: {
    //     open: true,
    //     title: "Subscribed successfully",
    //     text: "Thank you for subscribing",
    //   },
    // });
    // dispatchModals({
    //   type: ModalsActionsEnum.SHOW_LOADING,
    //   payload: {
    //     open: true,
    //     title: "Claiming",
    //     text: ["Claiming your rewards..."],
    //   },
    // });
  };

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
            action: onConfirm,
            btnColor: "primary",
            btnName: "Confirm",
            fullWidth: true,
          }}
        />
      </div>
    </div>
  );
};
