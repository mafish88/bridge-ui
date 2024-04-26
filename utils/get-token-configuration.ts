import { Coin, bridgeNetworks } from "../types/bridge-networks";

export const getTokenConfiguration = (tokenName: string): Coin | undefined => {
  for (let network of bridgeNetworks) {
    const tokenConfig = network.coins.find(
      (coin) => coin.name === tokenName || coin.symbol === tokenName
    );

    if (tokenConfig) {
      return tokenConfig;
    }
  }

  return undefined;
};
