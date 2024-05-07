export enum NetworkName {
  MAINNET = "Mainnet",
  TESTNET = "Testnet",
  DEVNET = "Devnet",
  PRNET = "PRnet",
  ETH = "Ethereum",
  HOLESKY = "Holesky",
}
export interface Network {
  chainId: number;
  chainName: string;
  rpcUrl: string;
  iconUrl: string;
  blockExplorerUrl: string;
  nativeCurrency: {
    name: string;
    symbol: string;
    decimals: number;
  };
  indexerUrl: string;
  graphqlUrl: string;
  faucetUrl: string;
}
export interface Networks {
  [key: number]: Network;
}

export const networks: Networks = {
  841: {
    chainId: 841,
    chainName: "Taraxa Mainnet",
    rpcUrl: "https://rpc.mainnet.taraxa.io/",
    iconUrl: "https://community.taraxa.io/logo192.png",
    blockExplorerUrl: "https://mainnet.explorer.taraxa.io/",
    nativeCurrency: {
      name: "TARA",
      symbol: "TARA",
      decimals: 18,
    },
    indexerUrl: "https://indexer.mainnet.explorer.taraxa.io",
    graphqlUrl: "https://graphql.mainnet.taraxa.io/",
    faucetUrl: "",
  },
  842: {
    chainId: 842,
    chainName: "Taraxa Testnet",
    rpcUrl: "https://rpc.testnet.taraxa.io/",
    iconUrl: "https://community.taraxa.io/logo192.png",
    blockExplorerUrl: "https://testnet.explorer.taraxa.io/",
    nativeCurrency: {
      name: "TARA",
      symbol: "TARA",
      decimals: 18,
    },
    indexerUrl: "https://indexer.testnet.explorer.taraxa.io",
    graphqlUrl: "https://graphql.testnet.taraxa.io/",
    faucetUrl: "https://faucet-testnet.explorer.taraxa.io/",
  },
  843: {
    chainId: 843,
    chainName: "Taraxa Devnet",
    rpcUrl: "https://rpc.devnet.taraxa.io/",
    iconUrl: "https://community.taraxa.io/logo192.png",
    blockExplorerUrl: "https://devnet.explorer.taraxa.io/",
    nativeCurrency: {
      name: "TARA",
      symbol: "TARA",
      decimals: 18,
    },
    indexerUrl: "https://indexer.devnet.explorer.taraxa.io",
    graphqlUrl: "https://graphql.devnet.taraxa.io/",
    faucetUrl: "https://faucet-devnet.explorer.taraxa.io/",
  },
  200: {
    chainId: 200,
    chainName: "Taraxa PRnet",
    rpcUrl: "https://rpc-pr-2618.prnet.taraxa.io/",
    iconUrl: "https://community.taraxa.io/logo192.png",
    blockExplorerUrl: "https://devnet.explorer.taraxa.io/",
    nativeCurrency: {
      name: "TARA",
      symbol: "TARA",
      decimals: 18,
    },
    indexerUrl: "https://indexer.devnet.explorer.taraxa.io",
    graphqlUrl: "https://graphql.devnet.taraxa.io/",
    faucetUrl: "https://faucet-devnet.explorer.taraxa.io/",
  },
  1: {
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
  },
  17000: {
    chainId: 17000, // Ethereum PR Net Holesky chainId
    chainName: "Holesky",
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
  },
};

export const networkNameToId: { [key in NetworkName]: number } = {
  [NetworkName.MAINNET]: 841,
  [NetworkName.TESTNET]: 842,
  [NetworkName.DEVNET]: 843,
  [NetworkName.PRNET]: 200,
  [NetworkName.ETH]: 1,
  [NetworkName.HOLESKY]: 17000,
};

export const getNetwork = (name: NetworkName): Network | null => {
  const id = networkNameToId[name];
  return networks[id] || null;
};

export const getNetworkById = (chainId: number): Network | null => {
  return networks[chainId] || null;
};

// Not really relevant anymore
export const getNetworkSubdomain = (network: NetworkName): string => {
  switch (network) {
    case NetworkName.TESTNET:
      return "testnet";
    case NetworkName.DEVNET:
      return "devnet";
    case NetworkName.MAINNET:
      return "mainnet";
    default:
      return "";
  }
};
