import React from "react";
import { useIntl } from "react-intl";
import { IProduct } from "../../models";
import { CartAction, updateCart } from "../../services";
import { messages } from "./messages";
import {
  AddToCartButton,
  Price,
  ProductTile,
  ProductItemWrapper,
  ProductImage,
  ProductImageWrapper,
  RemoveFromCart,
  RemoveFromCartButtonPlaceholder,
} from "./styled";

interface IProductItemProps {
  product: IProduct;
  isInCart: boolean;
}

export const ProductItem: React.FC<IProductItemProps> = React.memo(
  ({ product, isInCart }) => {
    const { formatMessage } = useIntl();

    const onAddToCart = () => updateCart(product.id, CartAction.Add);

    const onRemoveFromCart = () => updateCart(product.id, CartAction.Remove);

    return (
      <ProductItemWrapper>
        <ProductImageWrapper>
          <ProductImage src={product.image} loading="lazy" />
        </ProductImageWrapper>
        <ProductTile>{product.name}</ProductTile>
        <Price>{`${product.price.full} ${product.price.currency}`}</Price>
        <AddToCartButton onClick={onAddToCart}>
          {formatMessage(messages.addToCart)}
        </AddToCartButton>
        {isInCart ? (
          <RemoveFromCart onClick={onRemoveFromCart}>
            {formatMessage(messages.removeFromCart)}
          </RemoveFromCart>
        ) : (
          <RemoveFromCartButtonPlaceholder />
        )}
      </ProductItemWrapper>
    );
  }
);
