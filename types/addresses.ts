export const erc20MintingConnectorAddress: string =
  process.env.NEXT_PUBLIC_ERC20_MINTING_CONNECTOR_ADDRESS || "";

export const erc20LockingConnectorAddress: string =
  process.env.NEXT_PUBLIC_ERC20_LOCKING_CONNECTOR_ADDRESS || "";

export const taraConnectorAddress: string =
  process.env.NEXT_PUBLIC_TARA_CONNECTOR_ADDRESS || "";

export const wrappedTaraxaTokenAddress: string =
  process.env.NEXT_PUBLIC_WTARA_TOKEN_ADDRESS || "";

export const TARA_CHAIN_ID = parseInt(
  process.env.NEXT_PUBLIC_TARA_MAINNET_CHAIN_ID?.toString() || "841",
  10
);
export const ETH_CHAIN_ID = parseInt(
  process.env.NEXT_PUBLIC_ETH_MAINNET_CHAIN_ID?.toString() || "1",
  10
);

export const ethBridge = process.env.NEXT_PUBLIC_ETH_BRIDGE_ADDRESS || "";
export const taraBridge = process.env.NEXT_PUBLIC_TARA_BRIDGE_ADDRESS || "";
