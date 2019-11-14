import { HomeAction, HomeActionType } from './actions';

export interface HomeState {
    showGenre: boolean,
    showNotification: boolean,
}

const initialState: HomeState = {
    showGenre: false,
    showNotification: false
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

        default:
            return state
    }

}