export enum CartAction {
  Add,
  Remove,
}

export const ROHLIK_INTERVIEW_CART_KEY = "rohlikCart";
export const CART_EVENT = "CART_MODIFIED";

export * from "./getCartContent";
export * from "./updateCart";
