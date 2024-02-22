import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { reducer } from "./reducer";
import { thunk } from "redux-thunk";
import logger from "redux-logger";

const rootReducer = combineReducers({ user: reducer });
const store = configureStore({ reducer: rootReducer, middleware: () => [thunk, logger]});

export default store;
