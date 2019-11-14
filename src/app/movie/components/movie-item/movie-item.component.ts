import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { IMovie } from '@app/shared/models/movie.model';

@Component({
    selector: 'movie-item',
    templateUrl: './movie-item.component.html',
    styleUrls: ['./movie-item.component.sass']
})
export class MovieItemComponent implements OnInit, OnChanges {

    @Input() movie: IMovie
    public isMovieLoaded: boolean = false
    constructor() { }

    ngOnInit() {
    }

    ngOnChanges(changes: SimpleChanges) {
        if (!!changes && changes.hasOwnProperty('movie')) {
            if (!!this.movie) {
                this.isMovieLoaded = true
            }
        }
    }


}
