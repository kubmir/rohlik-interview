import * as React from "react";
import { useIntl } from "react-intl";

import { useCartContent } from "../../hooks/useCartContent";
import { useProducts } from "../../hooks/useProducts";
import { CartItem } from "../CartItem";
import { messages } from "./messages";
import { CartWrapper, CartListTitle } from "./styled";

export const CartList: React.FC = () => {
  const { formatMessage } = useIntl();

  const cartContent = useCartContent();
  const { products } = useProducts();

  const productsInCart = products.filter((product) =>
    cartContent.includes(product.id)
  );

  return (
    <CartWrapper>
      <CartListTitle>{formatMessage(messages.yourCart)}</CartListTitle>
      {productsInCart.map((cartItem, index) => (
        <CartItem key={`${cartItem.id}-${index}`} product={cartItem} />
      ))}
    </CartWrapper>
  );
};
