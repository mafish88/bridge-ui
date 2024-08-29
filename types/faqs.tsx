export type AccordionItem = {
  title: string;
  subtitle: React.ReactNode | string;
};

export const bridgeFaq: AccordionItem[] = [
  {
    title: "What is the Ficus Root Bridge?",
    subtitle:
      "The Ficus Root Bridge is Taraxa's native, 100% permissionless and decentralized cross-chain bridge that connects assets and data between Ethereum and Taraxa ecosystems.",
  },
  {
    title: "How do I use the Ficus Root Bridge?",
    subtitle: (
      <>
        You can use the following{" "}
        <a
          href="https://docs.taraxa.io/ficus-root-bridge/bridge-usage-guide"
          target="_blank"
          rel="noreferrer"
          className="text-primary underline"
        >
          guide
        </a>
      </>
    ),
  },
  {
    title: "Is the Ficus Root Bridge secure?",
    subtitle: (
      <>
        You can find more information about the security of the Ficus Root
        Bridge audit{" "}
        <a
          href="https://github.com/trailofbits/publications/blob/master/reviews/2024-07-taraxa-bridge-smart-contracts-v2-securityreview.pdf"
          target="_blank"
          rel="noreferrer"
          className="text-primary underline"
        >
          here
        </a>
      </>
    ),
  },
];
