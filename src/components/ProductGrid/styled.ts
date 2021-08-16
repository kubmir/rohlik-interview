import styled from "styled-components";

export const ProductGridWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-row: auto auto;
  grid-column-gap: 5%;
  grid-row-gap: 2rem;

  @media only screen and (min-width: 600px) {
    grid-template-columns: auto auto auto auto;
  }
`;

export const ProductListingSection = styled.div`
  width: 80%;
  align-content: center;
`;
