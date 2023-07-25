import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  upcomingMovies: [],
  searchedMovies: null,
};

export const STORE_NAME = 'series';

const series = createSlice({
  name: STORE_NAME,
  initialState,
  reducers: {
    setUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },
    setSearchedMovies: (state, action) => {
      state.searchedMovies = action.payload;
    },
  },
});

export const {reducer, name, actions} = series;
