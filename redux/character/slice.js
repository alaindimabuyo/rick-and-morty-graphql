import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchedCharacter: null,
};

export const STORE_NAME = "character";

const series = createSlice({
  name: STORE_NAME,
  initialState,
  reducers: {
    setSearchCharacter: (state, action) => {
      state.searchedCharacter = action.payload;
    },
  },
});

export const { reducer, name, actions } = series;
