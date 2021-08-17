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
}

export const CartItem: React.FC<ICartItemProps> = ({ product }) => {
  return (
    <CartItemWrapper>
      <ProductCircle imageUrl={product.image} />
      <ProductName>{product.name}</ProductName>
      <ProductPrice>{`${product.price.full} ${product.price.currency}`}</ProductPrice>
    </CartItemWrapper>
  );
};
