import { createSelector, createFeatureSelector, ActionReducerMap } from '@ngrx/store';
import { MoviesState, reducer } from './movies/reducer'
import { IMovie } from '@app/shared/models/movie.model';

export interface State {
    movies: MoviesState
}

export const reducers: ActionReducerMap<State> = {
    movies: reducer
}

const getMovieFeatureState = createFeatureSelector<any>('movies');

export const getMoviesList = createSelector(
    getMovieFeatureState,
    state => state.moviesList
);

export const getMovieByKey = (key: string) => createSelector(
    getMovieFeatureState,
    getMoviesList,
    (state) =>
        state.moviesList.find(movie => movie.key === key)
);

export const getSearchedMovieList = (req: string) => createSelector(
    getMovieFeatureState,
    getMoviesList,
    (state) =>
        state.moviesList.filter((movie: IMovie) =>
            movie.name.toLowerCase().includes(req))
);

export const getIsMoviesLoaded = createSelector(
    getMovieFeatureState,
    state => state.isMoviesLoaded
);

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