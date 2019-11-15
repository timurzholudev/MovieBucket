import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';

import * as fromRoot from 'app/state/index'
import * as fromHome from '../state'
import * as movieActions from '@app/state/movies/action'
import * as homeActions from '../state/actions'
import { Observable, Subject } from 'rxjs';
import { IMovie } from '@app/shared/models/movie.model';
import { takeUntil } from 'rxjs/operators';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit, OnDestroy {

    public filters
    public movies$: Observable<IMovie>
    private unsubscribe$: Subject<void> = new Subject();
    public filterList: string[] = [];

    constructor(
        private store: Store<fromRoot.State>,
        private homeStore: Store<fromHome.State>
    ) { }

    ngOnInit() {
        this.movies$ = this.store.select(fromRoot.getMoviesList);
        this.movies$
            .pipe(takeUntil(this.unsubscribe$))
            .subscribe(moviesList => {
                if (!moviesList)
                    this.getMovieList()
            });
    }

    ngOnDestroy(): void {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }

    public filterMovieList(value) {
        this.filterList = [...value]

    }

    private getMovieList() {
        this.store.dispatch(new movieActions.GetMovieList());
    }

}
