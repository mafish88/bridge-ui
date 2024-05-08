import { Network, networks } from "./networks";

export interface Coin {
  name: string;
  symbol: string;
  decimals: number;
  iconUrl: string;
  isNative: boolean;
  baseNetwork: number; // chainId for the base network
  deployAddress?: string;
  isImageTall?: boolean;
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
        baseNetwork: 200, // Using chainId directly
        isImageTall: false,
      },
      {
        name: "Wrapped Ether",
        symbol: "WETH",
        decimals: 18,
        iconUrl: "/ethereum-eth-logo-diamond-purple.svg",
        isNative: false,
        baseNetwork: 200, // Using chainId directly
        isImageTall: true,
        deployAddress: "0x",
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
        baseNetwork: 1, // Using chainId directly
        isImageTall: true,
      },
      {
        name: "Wrapped TARA",
        symbol: "WTARA",
        decimals: 18,
        iconUrl: "https://community.taraxa.io/logo192.png",
        isNative: false,
        baseNetwork: 1, // Using chainId directly
        isImageTall: false,
        deployAddress: "0x3E02bDF20b8aFb2fF8EA73ef5419679722955074",
      },
    ],
  },
];
