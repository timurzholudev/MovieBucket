import { Component, OnInit, Input, Output } from '@angular/core';
import { IMovie } from '@app/shared/models/movie.model';

@Component({
    selector: 'movie-item',
    templateUrl: './movie-item.component.html',
    styleUrls: ['./movie-item.component.sass']
})
export class MovieItemComponent implements OnInit {

    @Input() movie: IMovie

    constructor() { }

    ngOnInit() {
    }
}
