import { FilterPipe } from "./filter-movie.pipe"
import { IMovie } from '../models/movie.model';

describe('FilterPipe', () => {
    let movies: IMovie[] = [{
        "id": 1,
        "key": "deadpool",
        "name": "Deadpool",
        "description": "A former Special Forces operative turned mercenary is subjected to a rogue experiment that leaves him with accelrated healing powers, adopting the alter ego Deadpool.",
        "genres": ["action", "adventure", "comedy"],
        "rate": "8.6",
        "length": "1hr 48mins",
        "img": "deadpool.jpg"
    }];

    it('should return empty array if movies list null or empty array', () => {
        let pipe = new FilterPipe();
        expect(pipe.transform(null, [])).toEqual([]);
    });

    it('should return all movies if filters list null or empty array', () => {
        let pipe = new FilterPipe();
        expect(pipe.transform(movies, [])).toEqual(movies)
    });

    it('should return empty array if movie genres not found in filter', () => {
        let pipe = new FilterPipe();
        expect(pipe.transform(movies, ["drama"])).toEqual([])
    });
})