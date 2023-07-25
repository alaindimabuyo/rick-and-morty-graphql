import { createSelector } from "@reduxjs/toolkit";

export const selectSelf = (store) => store.character;

export const selectSearchedCharacter = createSelector(
  selectSelf,
  (state) => state.searchedCharacter
);
