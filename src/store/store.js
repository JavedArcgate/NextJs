import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import counter from "../feature/counter/counterSlice";
import foods from "../feature/food/foodSlice";

//For combine all the reducers in one root reducer
const root_reducer = combineReducers({
  counter,
  foods,
});

export const makeStore = () =>
  configureStore({
    reducer: root_reducer,
  });

export const wrapper = createWrapper(makeStore);
