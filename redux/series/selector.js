import {createSelector} from '@reduxjs/toolkit';

export const selectSelf = store => store.series;

export const selectSearchedMovies = createSelector(
  selectSelf,
  state => state.searchedMovies,
);
