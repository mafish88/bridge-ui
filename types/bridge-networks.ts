import { Network, networks } from "./networks";

export interface Coin {
  name: string;
  symbol: string;
  decimals: number;
  iconUrl: string;
  isNative: boolean;
  contract?: string;
  isImageTall?: boolean;
}
export interface BridgeNetwork extends Network {
  coins: Coin[];
  isImageTall?: boolean;
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
        isImageTall: false,
      },
      {
        name: "Wrapped Ether",
        symbol: "WETH",
        decimals: 18,
        iconUrl: "/ethereum-eth-logo-diamond-purple.svg",
        isNative: false,
        isImageTall: true,
      },
      {
        name: "Wrapped USDT",
        symbol: "USDT",
        decimals: 6,
        iconUrl: "/tether-usdt-logo.svg",
        isNative: false,
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
        isImageTall: true,
      },
      {
        name: "Wrapped TARA",
        symbol: "WTARA",
        decimals: 18,
        iconUrl: "https://community.taraxa.io/logo192.png",
        isNative: false,
        contract: "",
        isImageTall: false,
      },
      {
        name: "USDT",
        symbol: "USDT",
        decimals: 6,
        iconUrl: "/tether-usdt-logo.svg",
        isNative: false,
        contract: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
        isImageTall: false,
      },
    ],
  },
];
