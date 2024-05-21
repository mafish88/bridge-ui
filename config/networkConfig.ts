import {
  TARA_CHAIN_ID,
  ETH_CHAIN_ID,
  taraConnectorAddress,
  ethConnectorAddress,
  erc20TaraMintingConnectorAddress,
  erc20EthMintingConnectorAddress,
  erc20TaraLockingConnectorAddress,
  erc20EthLockingConnectorAddress,
} from "@/types/addresses";

export const networkConfigs = {
  [TARA_CHAIN_ID]: {
    chainId: TARA_CHAIN_ID,
    connectorAddresses: {
      native: taraConnectorAddress,
      erc20Minting: erc20TaraMintingConnectorAddress,
      erc20Locking: erc20TaraLockingConnectorAddress,
    },
  },
  [ETH_CHAIN_ID]: {
    chainId: ETH_CHAIN_ID,
    connectorAddresses: {
      native: ethConnectorAddress,
      erc20Minting: erc20EthMintingConnectorAddress,
      erc20Locking: erc20EthLockingConnectorAddress,
    },
  },
};

export type NetworkConfig =
  (typeof networkConfigs)[keyof typeof networkConfigs];
