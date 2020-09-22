import { CartActionTypes } from "./cart.types";
import { preventDuplicates } from "./cart.utils";

const INITIAL_STATE = {
  cartHidden: true,
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        cartHidden: !state.cartHidden,
      };
    case CartActionTypes.ADD_ITEM_TO_CART:
      return {
        ...state,
        cartItems: preventDuplicates(state.cartItems, action.payload),
      };
    default:
      return state;
  }
};

export default cartReducer;