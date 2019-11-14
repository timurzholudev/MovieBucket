import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import * as fromRoot from 'app/state'
import * as movieActions from '@app/state/movies/action'
import { Store, ActionsSubject } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { IMovie } from '@app/shared/models/movie.model';
import { takeUntil } from 'rxjs/operators';

@Component({
    templateUrl: './movie-shell.component.html',
    styleUrls: ['./movie-shell.component.sass']
})
export class MovieShellComponent implements OnInit, OnDestroy {

    public movie$: Observable<IMovie>
    public key: string
    private unsubscribe$: Subject<void> = new Subject();

    constructor(
        private _activatedRoute: ActivatedRoute,
        private _actionSubject: ActionsSubject,
        private _router: Router,
        private store: Store<fromRoot.State>
    ) { }

    ngOnInit() {
        this._activatedRoute.paramMap.subscribe(parms => {
            this.key = parms.get('id');
        });

        this.store.select(fromRoot.getIsMoviesLoaded)
            .pipe(takeUntil(this.unsubscribe$))
            .subscribe(resp => {
                if (resp) {
                    console.log('Have movies')
                    this.getMovieByKey();
                } else {
                    console.log('No movies')
                    this.store.dispatch(new movieActions.GetMovieList())
                }
            });

        this._actionSubject
            .pipe(takeUntil(this.unsubscribe$))
            .subscribe(data => {
                console.log(data.type)
                if (data.type === movieActions.MovieActionType.GetMovieListSuccess) {
                    console.log('Movie Success')
                    this.getMovieByKey();
                }
            });
    }

    ngOnDestroy() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }

    private getMovieByKey() {
        this.movie$ = this.store.select(fromRoot.getMovieByKey(this.key))
        this.movie$
            .pipe(takeUntil(this.unsubscribe$))
            .subscribe(resp => {
                if (!resp)
                    this._router.navigate(['404'])
            });

    }

}
