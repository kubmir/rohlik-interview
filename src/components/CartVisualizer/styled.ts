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
  border: 1px solid rgba(0, 0, 0, 1);
  background-color: rgba(0, 0, 0, 1);
  box-shadow: 0 0 0.25rem 0 rgba(0, 0, 0, 1);

  :before {
    content: attr(data-countInCart);
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: -0.3rem;
    right: -0.3rem;
    color: rgb(255, 255, 255);
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    background: rgb(109, 163, 5);
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

  background-color: rgba(255, 255, 255, 1);
  border-radius: 5%;
  border: 1px solid rgba(0, 0, 0, 0.15);

  overflow: scroll;

  -ms-overflow-style: none;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;
