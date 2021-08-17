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
  border: 1px solid ${(props) => props.theme.colors.lightDark};
`;

export const AddToCartButton = styled(Button)`
  background: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.dark};

  &:hover {
    color: ${(props) => props.theme.colors.white};
    background: ${(props) => props.theme.colors.success};
  }
`;

export const RemoveFromCart = styled(Button)`
  background: ${(props) => props.theme.colors.danger};
  color: ${(props) => props.theme.colors.white};
  margin: 0 auto;

  &:hover {
    color: ${(props) => props.theme.colors.danger};
    background: ${(props) => props.theme.colors.white};
    border: 1px solid ${(props) => props.theme.colors.danger};
  }
`;

export const RemoveFromCartButtonPlaceholder = styled.div`
  width: 100%;
  height: 2rem;
`;
