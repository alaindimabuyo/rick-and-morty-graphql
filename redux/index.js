import { createWrapper } from "next-redux-wrapper";
import {
  actions as seriesActions,
  reducer as seriesReducer,
  name as seriesName,
} from "./series/slice";

import {
  actions as characterActions,
  reducer as characterReducer,
  name as characterName,
} from "./character/slice";

import * as seriesSelectors from "./series/selector";
import * as characterSelectors from "./character/selector";

import { configureStore, Middleware } from "@reduxjs/toolkit";

import {
  useSelector as _useSelector,
  useDispatch as _useDispatch,
} from "react-redux";

import { setupListeners } from "@reduxjs/toolkit/dist/query";

import baseQueryAPI from "./baseApi";

const storeMiddlewares = [];
storeMiddlewares.push(baseQueryAPI.middleware);

export const createStore = () => {
  const store = configureStore({
    reducer: {
      [baseQueryAPI.reducerPath]: baseQueryAPI.reducer,
      [seriesName]: seriesReducer,
      [characterName]: characterReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }).concat(...storeMiddlewares),
  });
  setupListeners(store.dispatch);
  return store;
};

export const store = createStore();
const makeStore = () => store;

export const wrapper = createWrapper(makeStore);
export const actions = {
  [seriesName]: seriesActions,
  [characterName]: characterActions,
};

export const selectors = {
  [seriesName]: seriesSelectors,
  [characterName]: characterSelectors,
};

export const useDispatch = () => _useDispatch();
export const useSelector = _useSelector;
