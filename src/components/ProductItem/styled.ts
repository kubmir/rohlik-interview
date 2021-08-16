import styled from "styled-components";

export const ProductItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProductImageWrapper = styled.div`
  width: 100%;
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

const Button = styled.button`
  font-size: 0.75rem;
  font-weight: bold;

  height: 2rem;
  max-width: 100%;

  margin: 1rem auto;
  padding: 0 2rem;

  cursor: pointer;

  border-radius: 0.25rem;
  border: 1px solid rgba(0, 0, 0, 0.15);
`;

export const AddToCartButton = styled(Button)`
  background: rgb(255, 255, 255);
  color: rgb(28, 37, 41);

  &:hover {
    color: rgb(255, 255, 255);
    background: rgb(109, 163, 5);
  }
`;

export const RemoveFromCart = styled(Button)`
  background: rgba(190, 17, 3, 0.75);
  color: rgb(28, 37, 41);
  margin: 0 auto;

  &:hover {
    color: rgba(190, 17, 3, 0.75);
    background: rgb(255, 255, 255);
    border: 1px solid rgba(190, 17, 3, 0.75);
  }
`;

export const RemoveFromCartButtonPlaceholder = styled.div`
  width: 100%;
  height: 2rem;
`;
