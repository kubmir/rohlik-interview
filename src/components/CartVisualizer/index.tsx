import * as React from "react";
import { FaShoppingCart } from "react-icons/fa";

import { useCartContent } from "../../hooks/useCartContent";
import { CartList } from "../CartList";
import { CartModal, CartCircle, CartContentIconWrapper } from "./styled";

export const CartVisualizer: React.FC = () => {
  const [isCartModalOpen, setIsCartModalOpen] = React.useState(false);

  const cartContent = useCartContent();

  const toggleModal = () => setIsCartModalOpen((prevState) => !prevState);

  return (
    <>
      <CartModal
        isOpen={isCartModalOpen}
        onRequestClose={toggleModal}
        appElement={document.getElementById("root") as HTMLElement}
      >
        <CartList />
      </CartModal>
      <CartContentIconWrapper onClick={toggleModal}>
        <CartCircle data-countincart={cartContent.length}>
          <FaShoppingCart size="36px" color="white" />
        </CartCircle>
      </CartContentIconWrapper>
    </>
  );
};
