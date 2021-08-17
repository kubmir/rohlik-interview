import * as React from "react";

import { IProduct } from "../../models";
import {
  CartItemWrapper,
  ProductCircle,
  ProductName,
  ProductPrice,
} from "./styled";

interface ICartItemProps {
  product: IProduct;
  countInCart: number;
}

export const CartItem: React.FC<ICartItemProps> = React.memo(
  ({ product, countInCart }) => {
    return (
      <CartItemWrapper>
        <ProductCircle imageUrl={product.image} />
        <ProductName>{product.name}</ProductName>
        <ProductPrice>{`${countInCart} x ${product.price.full} ${product.price.currency}`}</ProductPrice>
      </CartItemWrapper>
    );
  }
);
