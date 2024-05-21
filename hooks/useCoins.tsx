import { useState, useEffect } from "react";
import { useBridgeNetwork } from "../context/bridge-network";
import { Coin, coinConfigs } from "../config/coinConfigs";

export function useCoins() {
  const { fromNetwork } = useBridgeNetwork();
  const [coins, setCoins] = useState<Coin[]>([]);

  useEffect(() => {
    async function loadCoins() {
      const staticCoins = coinConfigs[fromNetwork.chainId] || [];
      // Eventually we need to fetch coins from a subgraph or similar
      //   const dynamicCoins = await fetchAdditionalCoins(fromNetwork.chainId);
      //   setCoins([...staticCoins, ...dynamicCoins]);
      setCoins(staticCoins);
    }

    loadCoins();
  }, [fromNetwork.chainId]);

  return coins;
}
