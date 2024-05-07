interface contractABI {
  name: string;
  abi: string;
}

export const ABIs: contractABI[] = [
  {
    name: "ERC20MintingConnector",
    abi: JSON.stringify([
      {
        type: "function",
        name: "burn",
        inputs: [{ name: "amount", type: "uint256", internalType: "uint256" }],
        outputs: [],
        stateMutability: "payable",
      },
      {
        type: "function",
        name: "claim",
        inputs: [],
        outputs: [],
        stateMutability: "payable",
      },
      {
        type: "event",
        name: "Burned",
        inputs: [
          {
            name: "account",
            type: "address",
            indexed: true,
            internalType: "address",
          },
          {
            name: "value",
            type: "uint256",
            indexed: false,
            internalType: "uint256",
          },
        ],
        anonymous: false,
      },
      {
        type: "event",
        name: "ClaimAccrued",
        inputs: [
          {
            name: "account",
            type: "address",
            indexed: true,
            internalType: "address",
          },
          {
            name: "value",
            type: "uint256",
            indexed: false,
            internalType: "uint256",
          },
        ],
        anonymous: false,
      },
      {
        type: "event",
        name: "Claimed",
        inputs: [
          {
            name: "account",
            type: "address",
            indexed: true,
            internalType: "address",
          },
          {
            name: "value",
            type: "uint256",
            indexed: false,
            internalType: "uint256",
          },
        ],
        anonymous: false,
      },
      {
        type: "event",
        name: "Funded",
        inputs: [
          {
            name: "sender",
            type: "address",
            indexed: true,
            internalType: "address",
          },
          {
            name: "connectorBase",
            type: "address",
            indexed: true,
            internalType: "address",
          },
          {
            name: "amount",
            type: "uint256",
            indexed: false,
            internalType: "uint256",
          },
        ],
        anonymous: false,
      },
    ]),
  },
  {
    name: "TaraConnector",
    abi: JSON.stringify([
      {
        type: "function",
        name: "claim",
        inputs: [],
        outputs: [],
        stateMutability: "payable",
      },
      {
        type: "function",
        name: "lock",
        inputs: [],
        outputs: [],
        stateMutability: "payable",
      },
      {
        type: "function",
        name: "feeToClaim",
        inputs: [{ name: "", type: "address", internalType: "address" }],
        outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
        stateMutability: "view",
      },
      {
        type: "event",
        name: "ClaimAccrued",
        inputs: [
          {
            name: "account",
            type: "address",
            indexed: true,
            internalType: "address",
          },
          {
            name: "value",
            type: "uint256",
            indexed: false,
            internalType: "uint256",
          },
        ],
        anonymous: false,
      },
      {
        type: "event",
        name: "Claimed",
        inputs: [
          {
            name: "account",
            type: "address",
            indexed: true,
            internalType: "address",
          },
          {
            name: "value",
            type: "uint256",
            indexed: false,
            internalType: "uint256",
          },
        ],
        anonymous: false,
      },
      {
        type: "event",
        name: "Locked",
        inputs: [
          {
            name: "account",
            type: "address",
            indexed: true,
            internalType: "address",
          },
          {
            name: "value",
            type: "uint256",
            indexed: false,
            internalType: "uint256",
          },
        ],
        anonymous: false,
      },
    ]),
  },
  {
    name: "ETHBridge",
    abi: JSON.stringify([
      {
        type: "function",
        name: "lastFinalizedBlock",
        inputs: [],
        outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
        stateMutability: "view",
      },
    ]),
  },
];
