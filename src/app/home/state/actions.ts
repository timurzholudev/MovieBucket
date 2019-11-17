import { Action } from '@ngrx/store';

export enum HomeActionType {
    ToggleShowGenre = "[Home] Toggle Show Genre",
    SetMoviesFilter = "[Movie] Set Movies Filter"
};

export class ToggleShowGenre implements Action {
    readonly type = HomeActionType.ToggleShowGenre;
    constructor(public payload: boolean) { }
}

export class SetMoviesFilter implements Action {
    readonly type = HomeActionType.SetMoviesFilter;
    constructor(public payload: string[]) { }
}


export type HomeAction =
    | ToggleShowGenre
    | SetMoviesFilter;