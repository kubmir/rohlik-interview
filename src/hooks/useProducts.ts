import { useState, useEffect } from "react";
import { IProduct } from "../models";

export const useProducts = (searchQuery = "") => {
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

  return {
    products: products.filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    ),
    error,
  };
};
