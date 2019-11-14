import { Action } from '@ngrx/store';
import { IMovie } from '@app/shared/models/movie.model';

export enum MovieActionType {
    GetMovieList = "[Movie] Get Movie List",
    GetMovieListSuccess = "[Movie] Get Movie List Success",
    GetMovieListFail = "[Movie] Get Movie List Fail",
}

export class GetMovieList implements Action {
    readonly type = MovieActionType.GetMovieList
}

export class GetMovieListSuccess implements Action {
    readonly type = MovieActionType.GetMovieListSuccess
    constructor(public payload: IMovie[]) { }
}

export class GetMovieListFail implements Action {
    readonly type = MovieActionType.GetMovieListFail
    constructor(public payload: string) { }
}

export type MovieAction = GetMovieList
    | GetMovieListSuccess
    | GetMovieListFail;