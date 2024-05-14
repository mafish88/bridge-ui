import { Network, networks } from "./networks";

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
  connectorType: "Minting" | "Locking" | "Native";
}
export interface BridgeNetwork extends Network {
  coins: Coin[];
  isImageTall?: boolean;
}

export const TARA_CHAIN_ID = 200; // Change this to 841 for mainnet
export const ETH_CHAIN_ID = 17000; // Change this to 1 for mainnet

export const bridgeNetworks: BridgeNetwork[] = [
  {
    ...networks[TARA_CHAIN_ID], // Taraxa Mainnet (PR NET)
    isImageTall: false,
    coins: [
      {
        name: "TARA",
        symbol: "TARA",
        decimals: 18,
        iconUrl: "https://community.taraxa.io/logo192.png",
        isNative: true,
        baseNetwork: TARA_CHAIN_ID, // Using chainId directly
        isImageTall: false,
        connectorType: "Native",
      },
      {
        name: "Wrapped Ether",
        symbol: "WETH",
        decimals: 18,
        iconUrl: "/ethereum-eth-logo-diamond-purple.svg",
        isNative: false,
        baseNetwork: TARA_CHAIN_ID, // Using chainId directly
        isImageTall: true,
        deployAddress: "0x",
        connectorAddress: "0x",
        connectorType: "Minting",
      },
    ],
  },
  {
    ...networks[ETH_CHAIN_ID], // ETH Holesky (PR NET)
    isImageTall: true,
    coins: [
      {
        name: "Ether",
        symbol: "ETH",
        decimals: 18,
        iconUrl: "/ethereum-eth-logo-diamond-purple.svg",
        isNative: true,
        baseNetwork: ETH_CHAIN_ID, // Using chainId directly
        isImageTall: true,
        connectorType: "Native",
      },
      {
        name: "Wrapped TARA",
        symbol: "WTARA",
        decimals: 18,
        iconUrl: "https://community.taraxa.io/logo192.png",
        isNative: false,
        baseNetwork: ETH_CHAIN_ID, // Using chainId directly
        isImageTall: false,
        deployAddress: "0x3E02bDF20b8aFb2fF8EA73ef5419679722955074",
        connectorAddress: "0x",
        connectorType: "Minting",
      },
    ],
  },
];
