import { useState, useEffect } from "react";

import { CART_EVENT, getCartContent } from "../services";

export const useCartContent = (): number[] => {
  const [cartIds, setCartIds] = useState<number[]>([]);

  const storageListener = () => {
    const productInCartIds = getCartContent();
    setCartIds(productInCartIds);
  };

  useEffect(() => {
    storageListener();
    window.addEventListener(CART_EVENT, storageListener);

    return () => {
      window.removeEventListener(CART_EVENT, storageListener);
    };
  }, []);

  return cartIds;
};
