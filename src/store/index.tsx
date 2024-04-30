import { configureStore } from "@reduxjs/toolkit";
import { searchReducer } from "./searchReducers";

export const store = configureStore({
  reducer: {
    searcher: searchReducer,
  }
});

export type SearchState = ReturnType<typeof store.getState>;