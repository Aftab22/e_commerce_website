import { UserActionTypes } from "./user.types";

//redux-step-6 create action to call reducer
export const setCurrentUser = (user) => {
  return {
    type: UserActionTypes.SET_CURRENT_USER,
    payload: user,
  };
};
