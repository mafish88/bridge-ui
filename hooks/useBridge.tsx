import { useBridgeNetwork } from "../context/bridge-network";
import { useBurnErc20 } from "./useBurnErc20";
import { useLockNative } from "./useLockNative";

export const useBridge = () => {
  const { coin } = useBridgeNetwork();
  const { lock: lockNative, isLoading: isLoadingNative } = useLockNative();
  const { burn, isLoading: isLoadingBurnErc20 } = useBurnErc20();

  const lock = coin?.isNative ? lockNative : burn;
  const isLoading = coin?.isNative ? isLoadingNative : isLoadingBurnErc20;

  const onBridge = async (amount: number, onSuccess: () => void) => {
    await lock(amount, onSuccess);
  };

  return {
    onBridge,
    isLoading,
  };
};
