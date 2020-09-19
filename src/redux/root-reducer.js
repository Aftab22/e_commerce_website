//redux-step-3 combine all reducers
import { combineReducers } from "redux";

import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";

//global state
export default combineReducers({
  user: userReducer,
  cart: cartReducer,
});
