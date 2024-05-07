import { utils, BigNumber } from "ethers";

export const useLockTara = () => {
  const { contractInstance, error } = useBridgeContract("lock");
  const [status, setStatus] = useState("");

  const lockTara = async (toAddress: string, amount: BigNumber) => {
    if (!contractInstance) {
      console.error(error);
      setStatus("Contract not available");
      return;
    }

    try {
      const tx = await contractInstance.lock(
        toAddress,
        utils.parseEther(`${amount}`)
      );
      await tx.wait();
      setStatus("Lock successful");
    } catch (err) {
      console.error(err);
      setStatus("Failed to lock TARA");
    }
  };

  return { lockTara, status };
};

function useBridgeContract(arg0: string): {
  contractInstance: any;
  error: any;
} {
  throw new Error("Function not implemented.");
}

function useState(arg0: string): [any, any] {
  throw new Error("Function not implemented.");
}
