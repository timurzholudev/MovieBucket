import { Component, OnInit, OnDestroy } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Store, ActionsSubject } from '@ngrx/store'

import * as fromRoot from 'app/state'
import * as movieActions from 'app/state/movies/action'
import { Observable, Subject } from 'rxjs'
import { IMovie } from '@app/shared/models/movie.model'
import { takeUntil } from 'rxjs/operators'

@Component({
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.sass']
})
export class SearchComponent implements OnInit, OnDestroy {

    public searchResult$: Observable<IMovie[]>
    public searchReq: string
    public resultLength: number = 0

    private unsubscribe$: Subject<void> = new Subject()

    constructor(
        private _activatedRoute: ActivatedRoute,
        private _actionsSubject: ActionsSubject,
        private store: Store<fromRoot.State>
    ) { }

    ngOnInit() {
        this._activatedRoute.paramMap.subscribe(params => {
            let req = params.get('req').toLowerCase();
            if (req !== this.searchReq) {
                this.searchReq = req
                this.checkIfMoviesLoaded();
            }
        });

        this._actionsSubject
            .pipe(takeUntil(this.unsubscribe$))
            .subscribe(data => {
                if (data.type === movieActions.MovieActionType.GetMovieListSuccess)
                    this.getSearchResult()
            });
    }

    ngOnDestroy(): void {
        this.unsubscribe$.next()
        this.unsubscribe$.complete
    }

    private checkIfMoviesLoaded() {
        this.store.select(fromRoot.getIsMoviesLoaded)
            .pipe(takeUntil(this.unsubscribe$))
            .subscribe(resp => {
                if (resp)
                    this.getSearchResult()
                else
                    this.store.dispatch(new movieActions.GetMovieList())
            });
    }

    private getSearchResult() {
        this.searchResult$ = this.store.select(fromRoot.getSearchedMovieList(this.searchReq))
        this.searchResult$
            .pipe(takeUntil(this.unsubscribe$))
            .subscribe((resp: IMovie[]) => {
                if (!!resp)
                    this.resultLength = resp.length
                else
                    this.resultLength = 0
            });
    }

}
