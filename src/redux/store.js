//redux-step-4 craete a store and pass root reducer to it

//when ever action gets fired we need to catch and display them
//we use middlewares : redux-logger for that , for console logging
//applymiddleware helps us add middlewares to redux
import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

import rootReducer from "./root-reducer";

//array of middlewares
const middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
