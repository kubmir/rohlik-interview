import { ROHLIK_INTERVIEW_CART_KEY } from ".";

const DEFAULT_CART_STATE = "[]";

export const getCartContent = (): number[] =>
  JSON.parse(
    localStorage.getItem(ROHLIK_INTERVIEW_CART_KEY) ?? DEFAULT_CART_STATE
  );
