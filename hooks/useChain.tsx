import { ethers } from "ethers";
import { useMemo } from "react";
import { useConnection } from "./useConnection";

function useChain() {
  const { chainId, ethereum } = useConnection();

  const provider = useMemo(() => {
    let provider;
    try {
      provider = new ethers.providers.Web3Provider(ethereum, "any");
    } catch (e) {
      provider = undefined;
    }

    return provider;
  }, [ethereum]);

  const signer = useMemo(() => {
    let signer;
    if (!provider) {
      return signer;
    }

    try {
      signer = provider.getSigner();
    } catch (e) {
      signer = undefined;
    }

    return signer;
  }, [provider]);

  return { chainId, provider, signer };
}

export default useChain;
