import { combineReducers, configureStore } from "@reduxjs/toolkit";
import countriesCovidReducer from "../slice/countriesCovidSlice";

const store = configureStore({
  reducer: combineReducers({
    covid: countriesCovidReducer,
  }),
});

export default store;
