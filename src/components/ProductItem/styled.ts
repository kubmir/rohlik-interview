import styled from "styled-components";

export const ProductItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProductImageWrapper = styled.div`
  height: 200px;
`;

export const ProductImage = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

export const ProductTile = styled.h2`
  font-size: 1rem;
  padding-top: 0.75rem;
  cursor: pointer;
`;

export const Price = styled.span`
  font-size: 1.5rem;
`;

export const AddToCartButton = styled.button`
  font-size: 0.75rem;
  font-weight: bold;

  height: 2rem;

  margin: 1rem auto;
  padding: 0 2rem;

  background: rgb(255, 255, 255);
  color: rgb(28, 37, 41);
  border-radius: 0.25rem;
  border: 1px solid rgba(0, 0, 0, 0.15);

  cursor: pointer;

  &:hover {
    color: rgb(255, 255, 255);
    background: rgb(109, 163, 5);
  }
`;
