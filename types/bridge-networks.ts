import { Network, networks } from "./networks"; // Assuming these types are defined in `networks.ts`

export interface BridgeService {
  name: string;
  description: string;
  deployAddress: string;
}

// Define the BridgeNetwork interface extending Network
export interface BridgeNetwork extends Network {
  coins: Coin[];
  bridgeServices: BridgeService[];
  isImageTall?: boolean;
}

interface ContractFunction {
  description: string;
  abi: string[];
}

interface TokenContractDetails {
  deployAddress: string;
  functions: {
    [key: string]: ContractFunction;
  };
}

export interface Coin {
  name: string;
  symbol: string;
  decimals: number;
  iconUrl: string;
  isNative: boolean;
  contracts: { [network: number]: TokenContractDetails }; // Network number mapping to TokenContractDetails
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
        contracts: {
          200: {
            // Taraxa network
            deployAddress: "0x9E2762b1ef4F7Cc00BE66e024D5Db5E8dfB0BD6C",
            functions: {
              lock: {
                description: "Lock in Tara",
                abi: [
                  "function lock(address to, uint256 value) external returns (bool)",
                ],
              },
              claim: {
                description: "Claim Tara",
                abi: ["function claim(uint256 amount) external returns (bool)"],
              },
            },
          },
          1: {
            // Ethereum network
            deployAddress: "0xD4fa020c9318d5fc1F57b1551C9f507a967dEa61",
            functions: {
              mint: {
                description: "Mint WTARA on Ethereum",
                abi: [
                  "function mint(address beneficiary, uint256 value) external returns (bool)",
                ],
              },
            },
          },
        },
        isImageTall: false,
      },
    ],
    bridgeServices: [
      {
        name: "ETH Light Client",
        description: "Light client for monitoring Ethereum state",
        deployAddress: "0x686244563F8785C383da55df9872b23be3f9acf8",
      },
      {
        name: "Taraxa Bridge",
        description: "Handles bridge operations on Taraxa",
        deployAddress: "0x07fdD5b6fe9BD40d5ECDb90A6b039B4A24b929DA",
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
        name: "WTARA",
        symbol: "WTARA",
        decimals: 18,
        iconUrl: "https://community.taraxa.io/logo192.png",
        isNative: false,
        contracts: {
          1: {
            deployAddress: "0x3E02bDF20b8aFb2fF8EA73ef5419679722955074",
            functions: {
              burn: {
                description: "Burn WTARA on Ethereum",
                abi: [
                  "function burn(address from, uint256 value) external returns (bool)",
                ],
              },
            },
          },
          200: {
            deployAddress: "0x07fdD5b6fe9BD40d5ECDb90A6b039B4A24b929DA",
            functions: {
              claim: {
                description: "Claim TARA on Taraxa",
                abi: [
                  "function claim(address to, uint256 value) external returns (bool)",
                ],
              },
            },
          },
        },
        isImageTall: false,
      },
      // Add other coins and contracts as needed
    ],
    bridgeServices: [
      {
        name: "ETHBridge",
        description: "Handles bridge operations on Ethereum",
        deployAddress: "0x5D126cB4E9f78145881762e2f62e5ce1C35B787f",
      },
    ],
  },
];
