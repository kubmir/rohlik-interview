import React from "react";
import { useIntl } from "react-intl";
import { IProduct } from "../../models";
import { messages } from "./messages";
import {
  AddToCartButton,
  Price,
  ProductTile,
  ProductItemWrapper,
  ProductImage,
  ProductImageWrapper,
} from "./styled";

interface IProductItemProps {
  product: IProduct;
}

export const ProductItem: React.FC<IProductItemProps> = ({ product }) => {
  const { formatMessage } = useIntl();

  return (
    <ProductItemWrapper>
      <ProductImageWrapper>
        <ProductImage src={product.image} loading="lazy" />
      </ProductImageWrapper>
      <ProductTile>{product.name}</ProductTile>
      <Price>{`${product.price.full} ${product.price.currency}`}</Price>
      <AddToCartButton onClick={() => console.log("On click")}>
        {formatMessage(messages.addToCart)}
      </AddToCartButton>
    </ProductItemWrapper>
  );
};
