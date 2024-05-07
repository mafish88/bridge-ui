import { useBridgeNetwork } from "../context/bridge-network";
import { useBurnErc20 } from "./useBurnErc20";
import { useClaimErc20 } from "./useClaimErc20";
import { useClaimNative } from "./useClaimNative";
import { useLockErc20 } from "./useLockErc20";
import { useLockNative } from "./useLockNative";

export const useBridge = () => {
  const { fromNetwork, toNetwork, coin } = useBridgeNetwork();
  const { lock: lockNative } = useLockNative();
  const { lock: lockErc20 } = useLockErc20();
  const { claim: claimNative } = useClaimNative();
  const { claim: claimErc20 } = useClaimErc20();
  const { burn: burnErc20 } = useBurnErc20();

  if (!fromNetwork || !toNetwork || !coin) {
    return;
  }

  const lock = coin.isNative ? lockNative : lockErc20;

  /**
   * @todo Implement the bridge function
   * Use cases:

    1. Transfer Tara from Taraxa to ETH
    Tara Connector deployed on Taraxa
    ERC20 Minting on ETH
    WTARA on ETH
    Details:

    1. Lock in Tara on the Taraxa Connector via calling [the lock function with your desired value](./src/tara/TaraConnector.sol#L42). Emits a `Locked` event with the origin `account` and `value` locked.
    2. Wait until the epoch is finalized and the bridge root & state is applied on the ETH side.
    3. Get the exact fee you need to pay to claim on the ETH side via calling [the feeToClaim view function with your address](./src/connectors/BridgeConnectorBase.sol#L12).
    4. Claim on the ETH side via calling [the claim function with the claim fee](./src/connectors/ERC20MintingConnector.sol#L52). Emits a `Claimed` event with the origin `account` and `value` claimed.

    2. Transfer ETH from ETH to Taraxa
    ETH connector deployed on ETH
    ERC20 minting deployed on TARA
    WETH on TARA
    Details:
    1. Burn ERC20 WTARA on ETH via calling [the burn function with your desired value](./src/connectors/ERC20MintingConnector.sol#L47). Emits a `Burned` event with the origin `account` and `value` burned.
    2. Wait until the epoch is finalized and the bridge root & state is applied on the Taraxa side.
    3. Get the exact fee you need to pay to claim via on the TARA side calling [the feeToClaim view function with your address](./src/connectors/BridgeConnectorBase.sol#L12).
    4. Claim on the Taraxa side via calling [the claim function with the claim fee](./src/tara/TaraConnector.sol#L52). Emits a `Claimed` event with the origin `account` and `value` claimed.

    3. Transfer ERC20 (Dodge) from ETH to Taraxa
    ERC20 Locking on ETH
    ERC20 Minting on Taraxa
    WDODGE on Taraxa
   */
};
