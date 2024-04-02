import { applyMiddleware } from "redux";
import { configureStore, combineReducers } from "@reduxjs/toolkit";

import thunk from "redux-thunk";

import productsReducer from "./Modules/Products/Reducer";

import cartReducer from "./Modules/Cart/Reducer";

const reducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
});

const store = configureStore({reducer}, applyMiddleware(thunk));

export default store;