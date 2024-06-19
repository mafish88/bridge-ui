import { ethers } from "ethers";
import { useEffect, useState } from "react";
import { useContract } from "./useContract";
import { useConnection } from "./useConnection";

export const useGetFeeToClaim = (address: string) => {
  const { nativeConnectorContract } = useContract();
  const [fee, setFee] = useState<number>(0);
  const { account, isOnWrongChain } = useConnection();

  useEffect(() => {
    const feeToClaim = async (address: string) => {
      if (!nativeConnectorContract) {
        return;
      }
      return await nativeConnectorContract.feeToClaim(address);
    };

    if (nativeConnectorContract && account && address && !isOnWrongChain) {
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
  }, [nativeConnectorContract, account, address, isOnWrongChain]);

  return {
    fee,
  };
};
