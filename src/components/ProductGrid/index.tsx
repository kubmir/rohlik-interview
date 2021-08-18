import React from "react";
import { useIntl } from "react-intl";

import { useSearchContext } from "../../context/SearchContext";
import { useCartContent } from "../../hooks/useCartContent";
import { useProducts } from "../../hooks/useProducts";
import { ProductItem } from "../ProductItem";
import { messages } from "./messages";
import {
  ErrorMessage,
  NoProductsMessage,
  ProductGridWrapper,
  ProductListingSection,
} from "./styled";

export const ProductGrid: React.FC = () => {
  const { formatMessage } = useIntl();

  const {
    state: { searchQuery },
  } = useSearchContext();

  const { products, error } = useProducts(searchQuery);
  const cartContent = useCartContent();

  if (error) {
    return <ErrorMessage>{formatMessage(messages.error)}</ErrorMessage>;
  }

  if (!products.length) {
    return (
      <NoProductsMessage>
        {formatMessage(messages.noProducts)}
      </NoProductsMessage>
    );
  }

  return (
    <ProductListingSection>
      <ProductGridWrapper>
        {products.map((product) => (
          <ProductItem
            key={product.id}
            product={product}
            isInCart={cartContent.includes(product.id)}
          />
        ))}
      </ProductGridWrapper>
    </ProductListingSection>
  );
};
