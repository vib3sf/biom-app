import { UnknownAction } from "@reduxjs/toolkit";

export interface SearchState {
  search: string;
}

const initialState: SearchState = {
  search: "",
};

export function searchReducer(
  state: SearchState = initialState,
  action: UnknownAction
): SearchState {
  switch (action.type) {
    case "UPDATE_SEARCH":
      return { search: action.payload as string };
    default:
      return state;
  }
}
