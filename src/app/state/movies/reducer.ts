import { IMovie } from '@app/shared/models/movie.model';
import { MovieActionType, MovieAction } from './action';

export interface MoviesState {
    moviesList: IMovie[],
    isMoviesLoaded: boolean,
    error: string
}

const initialState: MoviesState = {
    moviesList: null,
    isMoviesLoaded: false,
    error: ''
}

export function reducer(state = initialState, action: MovieAction): MoviesState {
    switch (action.type) {

        case MovieActionType.GetMovieListSuccess:
            return {
                ...state,
                moviesList: action.payload,
                isMoviesLoaded: true
            }

        case MovieActionType.GetMovieListFail:
            return {
                ...state,
                error: action.payload,
                isMoviesLoaded: false
            }

        default:
            return state
    }
}