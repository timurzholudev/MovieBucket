import { HomeAction, HomeActionType } from './actions';

export interface HomeState {
    showGenre: boolean,
    filterList: string[],
}

const initialState: HomeState = {
    showGenre: false,
    filterList: []
}

export function reducer(state = initialState, action: HomeAction): HomeState {
    switch (action.type) {

        case HomeActionType.ToggleShowGenre:
            return {
                ...state,
                showGenre: action.payload
            };

        case HomeActionType.SetMoviesFilter:
            return {
                ...state,
                filterList: action.payload
            };

        default:
            return state
    }

}