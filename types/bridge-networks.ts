import { Network, networks } from "./networks";

export interface Coin {
  name: string;
  symbol: string;
  decimals: number;
  iconUrl: string;
  isNative: boolean;
  taraxaContract?: string; // Address on Taraxa
  ethereumContract?: string; // Address on Ethereum
  baseNetwork: number; // chainId for the base network
  actionType: Action; // Enum for action type
  isImageTall?: boolean;
}
export interface BridgeNetwork extends Network {
  coins: Coin[];
  isImageTall?: boolean;
}

enum Action {
  MINT = "mint",
  LOCK = "lock",
  TRANSFER = "transfer",
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
        actionType: Action.TRANSFER,
        ethereumContract: "0x...", // Example address on Ethereum
        taraxaContract: "0x...", // Example address on Taraxa
        isImageTall: false,
      },
      {
        name: "Wrapped Ether",
        symbol: "WETH",
        decimals: 18,
        iconUrl: "/ethereum-eth-logo-diamond-purple.svg",
        isNative: false,
        baseNetwork: 200, // Using chainId directly
        actionType: Action.TRANSFER,
        ethereumContract: "0x...", // Example address on Ethereum
        taraxaContract: "0x...", // Example address on Taraxa
        isImageTall: true,
      },
      {
        name: "Wrapped USDT",
        symbol: "USDT",
        decimals: 6,
        iconUrl: "/tether-usdt-logo.svg",
        isNative: false,
        baseNetwork: 200, // Using chainId directly
        actionType: Action.TRANSFER,
        ethereumContract: "0x...", // Example address on Ethereum
        taraxaContract: "0x...", // Example address on Taraxa
        isImageTall: false,
      },
    ],
  },
  {
    chainId: 1, // Ethereum Mainnet chainId
    chainName: "Ethereum Mainnet",
    rpcUrl: "https://mainnet.infura.io/v3/",
    iconUrl: "/ethereum-eth-logo-diamond-purple.svg",
    blockExplorerUrl: "https://etherscan.io/",
    nativeCurrency: {
      name: "Ether",
      symbol: "ETH",
      decimals: 18,
    },
    indexerUrl: "https://api.thegraph.com/index-node/graphql",
    graphqlUrl: "https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v2",
    faucetUrl: "",
    isImageTall: true,
    coins: [
      {
        name: "Ether",
        symbol: "ETH",
        decimals: 18,
        iconUrl: "/ethereum-eth-logo-diamond-purple.svg",
        isNative: true,
        baseNetwork: 1, // Using chainId directly
        actionType: Action.TRANSFER,
        ethereumContract: "0x...", // Example address on Ethereum
        taraxaContract: "0x...", // Example address on Taraxa
        isImageTall: true,
      },
      {
        name: "Wrapped TARA",
        symbol: "WTARA",
        decimals: 18,
        iconUrl: "https://community.taraxa.io/logo192.png",
        isNative: false,
        baseNetwork: 1, // Using chainId directly
        actionType: Action.TRANSFER,
        ethereumContract: "0x...", // Example address on Ethereum
        taraxaContract: "0x...", // Example address on Taraxa
        isImageTall: false,
      },
      {
        name: "USDT",
        symbol: "USDT",
        decimals: 6,
        iconUrl: "/tether-usdt-logo.svg",
        isNative: false,
        baseNetwork: 1, // Using chainId directly
        actionType: Action.TRANSFER,
        ethereumContract: "0x...", // Example address on Ethereum
        taraxaContract: "0x...", // Example address on Taraxa
        isImageTall: false,
      },
    ],
  },
];
