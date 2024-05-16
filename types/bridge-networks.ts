import { ETH_CHAIN_ID, TARA_CHAIN_ID } from "./addresses";
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

export const bridgeNetworks: BridgeNetwork[] = [
  {
    ...networks[TARA_CHAIN_ID],
    isImageTall: false,
    coins: [
      {
        name: "TARA",
        symbol: "TARA",
        decimals: 18,
        iconUrl: "https://community.taraxa.io/logo192.png",
        isNative: true,
        baseNetwork: TARA_CHAIN_ID,
        isImageTall: false,
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
        deployAddress: "0x",
        connectorAddress: "0x",
        connectorType: "Minting",
      },
    ],
  },
  {
    ...networks[ETH_CHAIN_ID],
    isImageTall: true,
    coins: [
      {
        name: "Ether",
        symbol: "ETH",
        decimals: 18,
        iconUrl: "/ethereum-eth-logo-diamond-purple.svg",
        isNative: true,
        baseNetwork: ETH_CHAIN_ID,
        isImageTall: true,
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
        deployAddress: "0x3E02bDF20b8aFb2fF8EA73ef5419679722955074",
        connectorAddress: "0x",
        connectorType: "Minting",
      },
    ],
  },
];
