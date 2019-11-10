import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';

import * as fromHome from '../state'
import * as homeActions from '../state/actions'

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

    public clickedVal: boolean;

    constructor(
        private store: Store<fromHome.State>
    ) { }

    ngOnInit() {
        this.store
            .pipe(select(fromHome.getShowNotification))
            .subscribe(products => this.clickedVal = products);
    }

    clickedValue() {
        this.clickedVal = !this.clickedVal
        this.store.dispatch(new homeActions.GetMovieList());
        this.store.dispatch(new homeActions.ToggleShowGenre(this.clickedVal));
    }

}
