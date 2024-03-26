import { useEffect, useState } from "react";
import { useConnection } from "./useConnection";
import useChain from "./useChain";
import { ethers } from "ethers";

export const useBalance = () => {
  const { account, isOnWrongChain } = useConnection();
  const { provider } = useChain();
  const [balance, setBalance] = useState<number>(0);
  const [refetch, setRefetch] = useState<number>(0);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchBalance = async () => {
      if (!account || !provider) {
        setError("Account or provider not available");
        return;
      }
      try {
        const balance = await provider.getBalance(account);
        const valueInEther = ethers.utils.formatEther(balance.toString());
        setBalance(parseFloat(valueInEther));
      } catch (error) {
        console.error(error);
        setError("Failed to fetch TARA balance");
      }
    };

    if (account && provider && !isOnWrongChain) {
      fetchBalance();
    }
  }, [account, provider, refetch, isOnWrongChain]);

  return { balance, refetch: () => setRefetch(refetch + 1), error };
};
