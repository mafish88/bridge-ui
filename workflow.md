# Bridge Flow

## 1. No current bridging requests

### Step 1 - Select direction
We show an interface with two selectors for the "Transfer from" and "Transfer to" networks.

Options: "Ethereum Mainnet", "Taraxa Mainnet"

We have the "Ethereum Mainnet" preselected for the "Transfer from"
We have the "Taraxa Mainnet" preselected for the "Transfer to"

When we change the selection in one input, it switches the other one to the opposite

Additionally we have a "Swap Networks" icon.

After the user selects the from and to networks, he can click a "Begin new transfer" button.

This checks if he's connected to the "From" network.
If he's connected, move to step 2

If he's not connected, send request to MM to connect to the "From" network and, if the user switches to the correct network, we can move to step 2

### Step 2 - Select tokens

We show a dropdown (+ search) with all of the tokens from "From" network:

Ex.

If The "From" is Ethereum, we have: ETH, WTARA, USDT, etc.
If The "From" is Taraxa, we have: TARA, WETH, WUSDT, etc.

ETH and TARA are not ERC20 contract, but native tokens.

After the users selects the token, we enable a new section (previously disabled) where the user can enter the amount.

```
Enter amount
0.00

Max:
0.34876715 ETH
```

Max button will fill the input with the maximum number of tokens in the balance

If the amount is valid (has enough tokens in wallet), the "Continue" button will be enabled.

### Step 3 - Transfer tokens

Show a summary of token + amount + wallet address? + networks (from - to)

`Notice:
Once you confirm, the transfer will start. Transfers from Ethereum to Taraxa take about 30 minutes.`

If it's a native token (ETH, TARA), we initiate a transfer to the Bridge Locking Contract 

If it's an ERC20 token, we call the token contract approve method with the Bridge Locking Contract address and the amount.
After the user sends this tx and the tx is confirmed, we call the Bridge Locking contract.


## 2. Has bridging requests
TBD