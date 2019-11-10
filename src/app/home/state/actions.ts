import { Action } from '@ngrx/store';


export enum HomeActionType {
    ToggleShowGenre = "[Home] Toggle Show Genre",
    ToggleShowNotification = "[Home] Toggle Show Notification",
    GetMovieList = "[Home] Get Movie List",
    GetMovieListSuccess = "[Home] Get Movie List Success",
    GetMovieListFail = "[Home] Get Movie List Fail",
};

export class ToggleShowGenre implements Action {
    readonly type = HomeActionType.ToggleShowGenre;
    constructor(public payload: boolean) { }
}

export class ToggleShowNotification implements Action {
    readonly type = HomeActionType.ToggleShowNotification;
    constructor(public payload: boolean) { }
}

export class GetMovieList implements Action {
    readonly type = HomeActionType.GetMovieList;
}

export class GetMovieListSuccess implements Action {
    readonly type = HomeActionType.GetMovieListSuccess;
    constructor(public payload: any) { }
}

export class GetMovieListFail implements Action {
    readonly type = HomeActionType.GetMovieListFail;
    constructor(public payload: string) { }
}


export type HomeAction =
    | ToggleShowGenre
    | ToggleShowNotification
    | GetMovieList
    | GetMovieListSuccess
    | GetMovieListFail;