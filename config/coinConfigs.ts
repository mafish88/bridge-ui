// Importing constants and types
import {
  ETH_CHAIN_ID,
  TARA_CHAIN_ID,
  erc20EthMintingConnectorAddress,
  erc20TaraMintingConnectorAddress,
  ethConnectorAddress,
  taraConnectorAddress,
  wrappedEthTokenAddress,
  wrappedTaraxaTokenAddress,
} from "@/types/addresses";

export interface Coin {
  name: string;
  symbol: string;
  decimals: number;
  iconUrl: string;
  isNative: boolean;
  baseNetwork: number; // chainId for the base network
  deployAddress?: string;
  connectorAddress?: string;
  isImageTall?: boolean;
  connectorType: "Minting" | "Native";
}

export interface CoinConfig {
  [key: number]: Coin[];
}

export const coinConfigs: CoinConfig = {
  [TARA_CHAIN_ID]: [
    {
      name: "TARA",
      symbol: "TARA",
      decimals: 18,
      iconUrl: "https://community.taraxa.io/logo192.png",
      isNative: true,
      baseNetwork: TARA_CHAIN_ID,
      isImageTall: false,
      connectorAddress: taraConnectorAddress,
      connectorType: "Native",
    },
    {
      name: "Wrapped Ether",
      symbol: "WETH",
      decimals: 18,
      iconUrl: "/ethereum-eth-logo-diamond-purple.svg",
      isNative: false,
      baseNetwork: TARA_CHAIN_ID,
      isImageTall: true,
      deployAddress: wrappedEthTokenAddress,
      connectorAddress: erc20EthMintingConnectorAddress,
      connectorType: "Minting",
    },
  ],
  [ETH_CHAIN_ID]: [
    {
      name: "Ether",
      symbol: "ETH",
      decimals: 18,
      iconUrl: "/ethereum-eth-logo-diamond-purple.svg",
      isNative: true,
      baseNetwork: ETH_CHAIN_ID,
      isImageTall: true,
      connectorAddress: ethConnectorAddress,
      connectorType: "Native",
    },
    {
      name: "Wrapped TARA",
      symbol: "WTARA",
      decimals: 18,
      iconUrl: "https://community.taraxa.io/logo192.png",
      isNative: false,
      baseNetwork: ETH_CHAIN_ID,
      isImageTall: false,
      deployAddress: wrappedTaraxaTokenAddress,
      connectorAddress: erc20TaraMintingConnectorAddress,
      connectorType: "Minting",
    },
  ],
};

export const getTokenByConnectorAddress = (connectorAddress: string): Coin => {
  for (const chainId in coinConfigs) {
    for (const coin of coinConfigs[chainId]) {
      if (
        coin.connectorAddress?.toLowerCase() === connectorAddress.toLowerCase()
      ) {
        return coin;
      }
    }
  }
  throw new Error(`No coin found with connector address: ${connectorAddress}`);
};
