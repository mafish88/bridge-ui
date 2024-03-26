import { useState, useEffect } from "react";

export const useTaraCurrentPrice = () => {
  const [currentPrice, setCurrentPrice] = useState<number>();

  useEffect(() => {
    const getCurrentPrice = async (): Promise<number> => {
      try {
        const response = await fetch(
          "/api/tara-price"
        );
        const data = await response.json();
        return data.price;
      } catch (error: any) {
        console.error(error);
        throw error;
      }
    };

    getCurrentPrice()
      .then((response) => {
        if (response) {
          setCurrentPrice(response);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return { currentPrice };
};
