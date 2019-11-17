import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators'
import { IMovie } from '../models/movie.model';

@Injectable({ providedIn: 'root' })
export class MoviesService {

    private _movieUrl: string = '/assets/data/movie.mock-data.json';

    constructor(
        private http: HttpClient
    ) { }

    getMoviesList(): Observable<IMovie[]> {
        return this.http.get(this._movieUrl)
            .pipe(
                map(resp => <IMovie[]>resp),
                catchError(err => { throw err.status })
            );
    }
}