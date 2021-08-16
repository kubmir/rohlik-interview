import React from "react";
import { useSearchContext } from "../../context/SearchContext";
import { useCartContent } from "../../hooks/useCartContent";
import { useProducts } from "../../hooks/useProducts";
import { ProductItem } from "../ProductItem";
import { ProductGridWrapper, ProductListingSection } from "./styled";

export const ProductGrid: React.FC = () => {
  const {
    state: { searchQuery },
  } = useSearchContext();

  const { products, error } = useProducts(searchQuery);
  const cartContent = useCartContent();

  if (error) {
    console.log(error);
  }

  if (!products.length) {
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
