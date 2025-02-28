import { configureStore, combineReducers } from "@reduxjs/toolkit";
import bookReducer from "./bookSlice";

const rootReducer = combineReducers({
  books: bookReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
