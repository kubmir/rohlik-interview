import styled from "styled-components";
import Modal from "react-modal";

export const CartContentIconWrapper = styled.div`
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  z-index: 999;
  cursor: pointer;
`;

export const CartCircle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4rem;
  height: 4rem;
  min-width: 4rem;
  border-radius: 50%;
  border: 1px solid ${(props) => props.theme.colors.darkest};
  background-color: ${(props) => props.theme.colors.darkest};
  box-shadow: 0 0 0.25rem 0 ${(props) => props.theme.colors.darkest};

  :before {
    content: attr(data-countincart);
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: -0.3rem;
    right: -0.3rem;
    color: ${(props) => props.theme.colors.white};
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    background: ${(props) => props.theme.colors.success};
  }
`;

export const CartModal = styled(Modal)`
  width: 50%;
  height: auto;
  max-height: 80%;
  margin: auto;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) !important;

  background-color: ${(props) => props.theme.colors.white};
  border-radius: 5%;
  border: 1px solid ${(props) => props.theme.colors.lightDark};

  overflow: scroll;

  -ms-overflow-style: none;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }

  @media only screen and (max-width: 600px) {
    width: 90%;
  }
`;
