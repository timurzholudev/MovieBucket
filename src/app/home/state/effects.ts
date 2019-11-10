import { Injectable } from "@angular/core";
import { Effect, Actions, ofType } from '@ngrx/effects'
import { MoviesService } from '@shared/services/movies.service';
import * as homeActions from './actions';
import { mergeMap, map } from 'rxjs/operators';


@Injectable()
export class HomeEffects {
    constructor(
        private action$: Actions,
        private moviesService: MoviesService
    ) { }

    @Effect()
    loadMovies$ = this.action$.pipe(
        ofType(homeActions.HomeActionType.GetMovieList),
        mergeMap(action => this.moviesService.getMoviesList()
            .pipe(
                map(movies => (new homeActions.GetMovieListSuccess(movies)))
            ))
    );

}