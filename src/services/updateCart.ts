import { CartAction, CART_EVENT, ROHLIK_INTERVIEW_CART_KEY } from ".";
import { getCartContent } from "./getCartContent";

export const updateCart = (productId: number, action: CartAction) => {
  const productsInCart = getCartContent();

  // Depends on business case - should remove all items of product from cart or only one ?
  // Now it removes all.
  const newCartState =
    action === CartAction.Add
      ? [...productsInCart, productId]
      : productsInCart.filter(
          (cartProductId: number) => cartProductId !== productId
        );

  localStorage.setItem(ROHLIK_INTERVIEW_CART_KEY, JSON.stringify(newCartState));
  // I would store info in app context but task is to use local storage as cart info storage
  window.dispatchEvent(new Event(CART_EVENT));
};
