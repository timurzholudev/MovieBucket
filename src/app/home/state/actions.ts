import { Action } from '@ngrx/store';

export enum HomeActionType {
    ToggleShowGenre = "[Home] Toggle Show Genre",
    ToggleShowNotification = "[Home] Toggle Show Notification"
};

export class ToggleShowGenre implements Action {
    readonly type = HomeActionType.ToggleShowGenre;
    constructor(public payload: boolean) { }
}

export class ToggleShowNotification implements Action {
    readonly type = HomeActionType.ToggleShowNotification;
    constructor(public payload: boolean) { }
}


export type HomeAction =
    | ToggleShowGenre
    | ToggleShowNotification;