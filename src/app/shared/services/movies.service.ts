import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators'

@Injectable({ providedIn: 'root' })
export class MoviesService {

    private _movieUrl: string = '/assets/data/movie.mock-data.json';

    constructor(
        private http: HttpClient
    ) { }

    getMoviesList(): Observable<any> {
        return this.http.get(this._movieUrl)
            .pipe(
                map(resp => <any>resp),
                catchError(err => { throw err.status })
            );
    }
}