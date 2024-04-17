import { useIsMounted } from "@/hooks/useIsMounted";
import { useGetClaims } from "../../hooks/useGetClaims";
import Button from "../ui/button";

export type ClaimTokensProps = {
  onBack: () => void;
  onContinue: () => void;
};

export const ClaimTokens = ({ onContinue, onBack }: ClaimTokensProps) => {
  const isMounted = useIsMounted();
  const { claims } = useGetClaims();

  return (
    isMounted && (
      <div className="flex flex-col gap-3">
        <h2 className="text-lg">Available claims</h2>
        <div className="w-full flex flex-col sm:flex-row justify-between gap-4">
          <Button className="flex-1" onClick={onBack}>
            Back
          </Button>
          <Button className="flex-1" color="primary" onClick={onContinue}>
            Continue
          </Button>
        </div>
      </div>
    )
  );
};
