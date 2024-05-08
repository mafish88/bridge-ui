import { useBridgeNetwork } from "../context/bridge-network";
import { TARA_CHAIN_ID } from "../types/bridge-networks";
import { useClaimErc20 } from "./useClaimErc20";
import { useClaimNative } from "./useClaimNative";

export const useClaim = () => {
  const { fromNetwork, toNetwork, coin } = useBridgeNetwork();
  const { claim: claimNative } = useClaimNative();
  const { claim: claimErc20 } = useClaimErc20();
  const claim = coin?.baseNetwork === TARA_CHAIN_ID ? claimErc20 : claimNative;

  const onClaimSuccess = () => {
    console.log("Claimed successfully");
  };

  const onClaim = async (amount: number, address: string) => {
    await claim(address, onClaimSuccess);
  };

  return {
    onClaim,
  };
};
