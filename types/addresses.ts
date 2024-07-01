export const erc20TaraMintingConnectorAddress: string =
  process.env.NEXT_PUBLIC_TARA_ERC20_MINTING_CONNECTOR_ADDRESS || "";
export const erc20EthMintingConnectorAddress: string =
  process.env.NEXT_PUBLIC_ETH_ERC20_MINTING_CONNECTOR_ADDRESS || "";

export const taraConnectorAddress: string =
  process.env.NEXT_PUBLIC_TARA_CONNECTOR_ADDRESS || "";
export const ethConnectorAddress: string =
  process.env.NEXT_PUBLIC_ETH_CONNECTOR_ADDRESS || "";

export const wrappedTaraxaTokenAddress: string =
  process.env.NEXT_PUBLIC_WTARA_TOKEN_ADDRESS || "";

export const wrappedEthTokenAddress: string =
  process.env.NEXT_PUBLIC_WETH_TOKEN_ADDRESS || "";

export const TARA_CHAIN_ID = 842;
export const ETH_CHAIN_ID = 17000;

export const ethBridge = process.env.NEXT_PUBLIC_ETH_BRIDGE_ADDRESS || "";
export const taraBridge = process.env.NEXT_PUBLIC_TARA_BRIDGE_ADDRESS || "";

export const graphqlApiEthereum = process.env.NEXT_PUBLIC_ETHEREUM_GRAPHQL_API || "";
export const graphqlApiTaraxa = process.env.NEXT_PUBLIC_TARAXA_GRAPHQL_API || "";