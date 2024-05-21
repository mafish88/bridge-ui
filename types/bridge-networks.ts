import { ETH_CHAIN_ID, TARA_CHAIN_ID } from "./addresses";
import { Network, networks } from "./networks";

export interface BridgeNetwork extends Network {
  isImageTall?: boolean;
}

export const bridgeNetworks: BridgeNetwork[] = [
  {
    ...networks[TARA_CHAIN_ID],
    isImageTall: false,
  },
  {
    ...networks[ETH_CHAIN_ID],
    isImageTall: true,
  },
];
