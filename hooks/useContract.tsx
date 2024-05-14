import { useMemo } from "react";
import { ethers } from "ethers";
import {
  erc20MintingConnectorAddress,
  erc20LockingConnectorAddress,
  taraConnectorAddress,
} from "@/types/addresses";
import { ABIs } from "@/types/abis";
import useChain from "./useChain";

export function useContract() {
  const { provider, signer } = useChain();
  const erc20MintingConnectorAbi = ABIs.ERC20MintingConnector.abi;
  const erc20LockingConnectorAbi = ABIs.ERC20LockingConnector.abi;
  const taraConnectorAbi = ABIs.TaraConnector.abi;

  const erc20MintingConnectorContract = useMemo(() => {
    let instance: ethers.Contract | undefined;

    if (!provider || !signer) {
      return instance;
    }
    const contract = new ethers.Contract(
      erc20MintingConnectorAddress,
      erc20MintingConnectorAbi,
      provider
    );
    return contract.connect(signer);
  }, [erc20MintingConnectorAbi, provider, signer]);

  const erc20LockingConnectorContract = useMemo(() => {
    let instance: ethers.Contract | undefined;

    if (!provider || !signer) {
      return instance;
    }
    const contract = new ethers.Contract(
      erc20LockingConnectorAddress,
      erc20LockingConnectorAbi,
      provider
    );
    return contract.connect(signer);
  }, [erc20LockingConnectorAbi, provider, signer]);

  const taraConnectorContract = useMemo(() => {
    let instance: ethers.Contract | undefined;

    if (!provider || !signer) {
      return instance;
    }
    const contract = new ethers.Contract(
      taraConnectorAddress,
      taraConnectorAbi,
      provider
    );
    return contract.connect(signer);
  }, [taraConnectorAbi, provider, signer]);

  return {
    erc20MintingConnectorContract,
    erc20LockingConnectorContract,
    taraConnectorContract,
  };
}
