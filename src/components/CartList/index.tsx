import * as React from "react";
import { useIntl } from "react-intl";

import { useCartContent } from "../../hooks/useCartContent";
import { useProducts } from "../../hooks/useProducts";
import { CartItem } from "../CartItem";
import { messages } from "./messages";
import { CartListTitle, CartWrapper } from "./styled";

export const CartList: React.FC = () => {
  const { formatMessage } = useIntl();

  const cartContent = useCartContent();
  const { products } = useProducts();

  const productsInCart = products.filter((product) =>
    cartContent.includes(product.id)
  );

  const grouppedProducts = React.useMemo(
    () =>
      cartContent.reduce((acc, curr) => {
        acc[curr] = ++acc[curr] || 1;

        return acc;
      }, {} as { [key: string]: number }),
    [cartContent]
  );

  return (
    <CartWrapper>
      <CartListTitle>{formatMessage(messages.yourCart)}</CartListTitle>
      {productsInCart.map((cartItem, index) => (
        <CartItem
          key={`${cartItem.id}-${index}`}
          product={cartItem}
          countInCart={grouppedProducts[cartItem.id]}
        />
      ))}
    </CartWrapper>
  );
};
