import { createSelector } from "reselect";

//input selector
const selectCart = (state) => state.cart;

//output selector
//cart items get cached
export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.cartHidden
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce((accumulator, item) => accumulator + item.quantity, 0)
);
