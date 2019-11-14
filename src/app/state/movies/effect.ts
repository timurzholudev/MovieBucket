import { Injectable } from "@angular/core";
import { Actions, ofType, Effect } from '@ngrx/effects';
import { MoviesService } from '@app/shared/services/movies.service';
import { mergeMap, map, catchError } from 'rxjs/operators';
import * as movieActions from './action'
import { IMovie } from '@app/shared/models/movie.model';
import { of } from 'rxjs';

@Injectable()
export class MovieEffects {

    constructor(
        private action$: Actions,
        private moviesService: MoviesService
    ) { }

    @Effect()
    loadMovies$ = this.action$.pipe(
        ofType(movieActions.MovieActionType.GetMovieList),
        mergeMap(action => this.moviesService.getMoviesList()
            .pipe(
                map((movies: IMovie[]) => (new movieActions.GetMovieListSuccess(movies))),
                catchError(err => of(new movieActions.GetMovieListFail(err)))
            ))
    );

}