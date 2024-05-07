import { Network, networks } from "./networks";

export interface Coin {
  name: string;
  symbol: string;
  decimals: number;
  iconUrl: string;
  isNative: boolean;
  baseNetwork: number; // chainId for the base network
  deployAddresses: DeployedAddress[];
  isImageTall?: boolean;
}
export interface BridgeNetwork extends Network {
  coins: Coin[];
  isImageTall?: boolean;
}

interface DeployedAddress {
  action: Action;
  address: string;
}

enum Action {
  MINT = "mint",
  LOCK = "lock",
  CLAIN = "claim",
}

export const bridgeNetworks: BridgeNetwork[] = [
  {
    ...networks[200], // Taraxa Mainnet (PR NET)
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
        deployAddresses: [
          {
            action: Action.MINT,
            address: "0xD4fa020c9318d5fc1F57b1551C9f507a967dEa61",
          },
          {
            action: Action.LOCK,
            address: "0x9E2762b1ef4F7Cc00BE66e024D5Db5E8dfB0BD6C",
          },
        ],
      },
      {
        name: "Wrapped Ether",
        symbol: "WETH",
        decimals: 18,
        iconUrl: "/ethereum-eth-logo-diamond-purple.svg",
        isNative: false,
        baseNetwork: 200, // Using chainId directly
        isImageTall: true,
        deployAddresses: [
          {
            action: Action.MINT,
            address: "0x9E2762b1ef4F7Cc00BE66e024D5Db5E8dfB0BD6C",
          },
        ],
      },
      {
        name: "Wrapped USDT",
        symbol: "USDT",
        decimals: 6,
        iconUrl: "/tether-usdt-logo.svg",
        isNative: false,
        baseNetwork: 200, // Using chainId directly
        isImageTall: false,
        deployAddresses: [],
      },
    ],
  },
  {
    ...networks[17000], // ETH Holesky (PR NET)
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
        deployAddresses: [
          {
            action: Action.MINT,
            address: "0xD4fa020c9318d5fc1F57b1551C9f507a967dEa61",
          },
        ],
      },
      {
        name: "Wrapped TARA",
        symbol: "WTARA",
        decimals: 18,
        iconUrl: "https://community.taraxa.io/logo192.png",
        isNative: false,
        baseNetwork: 1, // Using chainId directly
        isImageTall: false,
        deployAddresses: [],
      },
      {
        name: "USDT",
        symbol: "USDT",
        decimals: 6,
        iconUrl: "/tether-usdt-logo.svg",
        isNative: false,
        baseNetwork: 1, // Using chainId directly
        isImageTall: false,
        deployAddresses: [],
      },
    ],
  },
];
