import { ethers } from "ethers";
import { useEffect, useState } from "react";
import { useContract } from "./useContract";
import { useConnection } from "./useConnection";

export const useGetFeeToClaim = (address: string) => {
  const { taraConnectorContract } = useContract();
  const [fee, setFee] = useState<number>(0);
  const { account, isOnWrongChain } = useConnection();

  useEffect(() => {
    const feeToClaim = async (address: string) => {
      try {
        return taraConnectorContract
          ? await taraConnectorContract.feeToClaim(address)
          : null;
      } catch (error: any) {
        console.error(error);
        throw error;
      }
    };
    if (taraConnectorContract && account && address && !isOnWrongChain) {
      feeToClaim(address)
        .then((response) => {
          if (response) {
            const valueInEther = ethers.utils.formatEther(response.toString());
            setFee(parseFloat(valueInEther));
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      setFee(0);
    }
  }, [taraConnectorContract, account, address, isOnWrongChain]);

  return {
    fee,
  };
};
