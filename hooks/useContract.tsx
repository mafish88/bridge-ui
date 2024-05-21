import { useMemo } from "react";
import { ethers } from "ethers";
import {
  erc20TaraMintingConnectorAddress,
  erc20EthMintingConnectorAddress,
  erc20TaraLockingConnectorAddress,
  erc20EthLockingConnectorAddress,
  taraConnectorAddress,
  ethConnectorAddress,
  TARA_CHAIN_ID,
  ETH_CHAIN_ID,
} from "@/types/addresses";
import { ABIs } from "@/types/abis";
import useChain from "./useChain";
import { useBridgeNetwork } from "../context/bridge-network";

export function useContract() {
  const { provider, signer } = useChain();
  const { fromNetwork } = useBridgeNetwork();
  const erc20MintingConnectorAbi = ABIs.ERC20MintingConnector.abi;
  const erc20LockingConnectorAbi = ABIs.ERC20LockingConnector.abi;
  const taraConnectorAbi = ABIs.TaraConnector.abi;

  const nativeConnectorAddress = useMemo(
    () => ({
      [TARA_CHAIN_ID]: taraConnectorAddress,
      [ETH_CHAIN_ID]: ethConnectorAddress,
    }),
    []
  );

  const erc20MintingConnectorAddress = useMemo(
    () => ({
      [TARA_CHAIN_ID]: erc20TaraMintingConnectorAddress,
      [ETH_CHAIN_ID]: erc20EthMintingConnectorAddress,
    }),
    []
  );

  const erc20LockingConnectorAddress = useMemo(
    () => ({
      [TARA_CHAIN_ID]: erc20TaraLockingConnectorAddress,
      [ETH_CHAIN_ID]: erc20EthLockingConnectorAddress,
    }),
    []
  );

  const taraConnectorContract = useMemo(() => {
    let instance: ethers.Contract | undefined;

    if (!provider || !signer) {
      return instance;
    }
    const contract = new ethers.Contract(
      nativeConnectorAddress[fromNetwork.chainId],
      taraConnectorAbi,
      provider
    );
    return contract.connect(signer);
  }, [
    provider,
    signer,
    nativeConnectorAddress,
    fromNetwork.chainId,
    taraConnectorAbi,
  ]);

  const erc20MintingConnectorContract = useMemo(() => {
    let instance: ethers.Contract | undefined;

    if (!provider || !signer) {
      return instance;
    }
    const contract = new ethers.Contract(
      erc20MintingConnectorAddress[fromNetwork.chainId],
      erc20MintingConnectorAbi,
      provider
    );
    return contract.connect(signer);
  }, [
    erc20MintingConnectorAbi,
    erc20MintingConnectorAddress,
    fromNetwork.chainId,
    provider,
    signer,
  ]);

  const erc20LockingConnectorContract = useMemo(() => {
    let instance: ethers.Contract | undefined;

    if (!provider || !signer) {
      return instance;
    }
    const contract = new ethers.Contract(
      erc20LockingConnectorAddress[fromNetwork.chainId],
      erc20LockingConnectorAbi,
      provider
    );
    return contract.connect(signer);
  }, [
    erc20LockingConnectorAbi,
    erc20LockingConnectorAddress,
    fromNetwork.chainId,
    provider,
    signer,
  ]);

  return {
    erc20MintingConnectorContract,
    erc20LockingConnectorContract,
    taraConnectorContract,
  };
}
