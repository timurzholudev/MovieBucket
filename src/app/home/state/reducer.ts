import { HomeAction, HomeActionType } from './actions';

export interface HomeState {
    showGenre: boolean,
    showNotification: boolean,
    movies: any,
    error: string
}

const initialState: HomeState = {
    showGenre: false,
    showNotification: false,
    movies: null,
    error: ''
}

export function reducer(state = initialState, action: HomeAction): HomeState {
    switch (action.type) {

        case HomeActionType.ToggleShowGenre:
            console.log(JSON.stringify(state), action.payload);
            return {
                ...state,
                showGenre: action.payload
            };

        case HomeActionType.ToggleShowNotification:
            return {
                ...state,
                showNotification: action.payload
            };

        case HomeActionType.GetMovieListSuccess:
            return {
                ...state,
                movies: action.payload,
                error: ''
            }

        case HomeActionType.GetMovieListFail:
            return {
                ...state,
                error: action.payload
            }


        default:
            return state
    }

}