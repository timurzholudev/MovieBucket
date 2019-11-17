import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { IMovie } from '@app/shared/models/movie.model';

@Component({
    selector: 'movie-desc',
    templateUrl: './movie-description.component.html',
    styleUrls: ['./movie-description.component.sass']
})
export class MovieDescriptionComponent implements OnInit, OnChanges {

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
