import styled from "styled-components";

export const ProductGridWrapper = styled.div`
  display: grid;
  grid-template-columns: 45% 45%;
  grid-row: auto auto;
  grid-column-gap: 5%;
  grid-row-gap: 2rem;

  @media only screen and (min-width: 600px) {
    // Due to jumping on auto
    grid-template-columns: 22% 22% 22% 22%;
    grid-column-gap: 4%;
  }
`;

export const ProductListingSection = styled.div`
  align-content: center;
`;

export const ErrorMessage = styled.p`
  font-size: 1.5rem;
  color: ${(props) => props.theme.colors.danger};
`;

export const NoProductsMessage = styled.p`
  font-size: 1.5rem;
  color: ${(props) => props.theme.colors.dark};
`;
