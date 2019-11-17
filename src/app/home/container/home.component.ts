import { Component, OnInit, OnDestroy, AfterViewInit, } from '@angular/core';
import { Store, select } from '@ngrx/store';

import * as fromRoot from 'app/state/index'
import * as fromHome from '../state'
import * as movieActions from '@app/state/movies/action'
import * as homeActions from '../state/actions'
import { Observable, Subject } from 'rxjs';
import { IMovie } from '@app/shared/models/movie.model';
import { takeUntil } from 'rxjs/operators';
import { slideToggleAnimation } from '@app/shared/animations/slide-toggle.animation';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.sass'],
    animations: [
        slideToggleAnimation
    ]
})
export class HomeComponent implements OnInit, OnDestroy {

    public filters
    public filterList: string[]
    public showFilter: boolean

    public movies$: Observable<IMovie>
    private unsubscribe$: Subject<void> = new Subject();

    constructor(
        private store: Store<fromRoot.State>,
        private homeStore: Store<fromHome.State>
    ) { }

    ngOnInit() {
        this.movies$ = this.store.select(fromRoot.getMoviesList);
        this.homeStore.select(fromHome.getShowGenre)
            .pipe(takeUntil(this.unsubscribe$))
            .subscribe(val => this.showFilter = val);

        this.homeStore.select(fromHome.getFilterList)
            .pipe(takeUntil(this.unsubscribe$))
            .subscribe(filters => {
                if (!!filters)
                    this.filterList = [...filters]
            })

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

    public filterMovieList(value: string[]) {
        this.homeStore.dispatch(new homeActions.SetMoviesFilter(value));

    }

    public toggleFilter() {
        this.homeStore.dispatch(new homeActions.ToggleShowGenre(!this.showFilter));
    }

    private getMovieList() {
        this.store.dispatch(new movieActions.GetMovieList());
    }

}
