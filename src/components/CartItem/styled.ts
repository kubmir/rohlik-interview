import styled from "styled-components";

export const ProductCircle = styled.div<{
  imageUrl: string;
}>`
  width: 3rem;
  height: 3rem;
  min-width: 3rem;
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, 0.15);
  box-shadow: 0 0 0.25rem 0 rgba(0, 0, 0, 0.15);
  background-image: url(${(props) => props.imageUrl});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

export const CartItemWrapper = styled.div`
  display: flex;
  margin: 1rem 1rem;
`;

export const ProductName = styled.div`
  font-size: 1rem;
  font-weight: bold;
  margin-left: 2rem;
  align-self: center;
`;

export const ProductPrice = styled.div`
  font-size: 0.75rem;
  margin-left: 1rem;
  align-self: center;
`;
