import { useState, useEffect } from "react";
import { IProduct } from "../models";

export const useProducts = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [error, setError] = useState<Error>();

  useEffect(() => {
    (async () => {
      try {
        const loadedProductsResponse = await fetch("products.json");

        const loadedProducts = await loadedProductsResponse.json();
        setProducts(loadedProducts);
      } catch (catchedError) {
        setError(catchedError);
      }
    })();
  }, []);

  return { products, error };
};
