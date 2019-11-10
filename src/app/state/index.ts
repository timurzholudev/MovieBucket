import { createSelector, createFeatureSelector } from '@ngrx/store';

export interface State {

}

// const getMovieFeatureState = createFeatureSelector<any>('movie');

// export const getSelectedMovieId = createSelector(
//     getMovieFeatureState,
//     state => state.selectedMovieId
// );

// export const getSelectedMovie = createSelector(
//     getMovieFeatureState,
//     getSelectedMovieId,
//     (state, selectedMovieId) =>
//         state.movies.find(movie => movie.id === selectedMovieId)
// );