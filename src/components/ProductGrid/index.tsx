import React from "react";
import { useProducts } from "../../hooks/useProducts";
import { ProductItem } from "../ProductItem";
import { ProductGridWrapper, ProductListingSection } from "./styled";

export const ProductGrid: React.FC = () => {
  const { products, error } = useProducts();

  if (error) {
    console.log(error);
  }

  if (!products.length) {
  }

  return (
    <ProductListingSection>
      <ProductGridWrapper>
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </ProductGridWrapper>
    </ProductListingSection>
  );
};
