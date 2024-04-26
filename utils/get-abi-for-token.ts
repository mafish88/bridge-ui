import { Coin } from "../types/bridge-networks";

const TaraABI: string[] = [];
const WTaraABI: string[] = [];
const WETHABI: string[] = [];

const abiMapping: { [key: string]: any[] } = {
  TARA: TaraABI,
  WTARA: WTaraABI,
  WETH: WETHABI,
  // Define other ABIs as necessary
};

export const getABIForToken = (token: Coin) => {
  return abiMapping[token.symbol] || undefined;
};
