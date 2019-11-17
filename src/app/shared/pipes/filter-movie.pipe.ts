import { Pipe, PipeTransform } from '@angular/core';
import { IMovie } from '../models/movie.model';
@Pipe({
    name: 'filter'
})
export class FilterPipe implements PipeTransform {
    transform(movies: IMovie[], filters: string[]): any[] {
        if (!movies) return [];
        if (!filters || filters.length === 0) return movies;

        return movies.filter((movie: IMovie) => {
            return filters.some(filter => movie.genres.includes(filter))
        })
    }
}