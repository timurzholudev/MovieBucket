import { Pipe, PipeTransform } from '@angular/core';
import { IMovie } from '../models/movie.model';
@Pipe({
    name: 'filter'
})
export class FilterPipe implements PipeTransform {
    transform(movies: IMovie[], filters: string[]): any[] {
        console.log('Filter pipe ==========>')
        console.log(movies)
        console.log(filters)
        console.log('Filter pipe ==========>')
        if (!movies) return [];
        if (filters.length === 0) return movies;

        return movies.filter((movie: IMovie) => {
            return filters.some(filter => movie.genres.includes(filter))
            // console.log(loga)
        })

        // return []
        // return items.filter(it => {
        //     return it.toLowerCase().includes(filters);
        // });
    }
}