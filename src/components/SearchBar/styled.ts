import styled from "styled-components";

export const SearchInput = styled.input`
  width: 50%;
  margin: 2rem;
  height: 2rem;
  padding-left: 1rem;
  border-radius: 0.25rem;
  border: 1px solid ${(props) => props.theme.colors.lightDark};
`;
