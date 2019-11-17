import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { MoviesService } from './movies.service';
import { TestBed } from '@angular/core/testing';

describe('MoviesService', () => {
    let httpTestingController: HttpTestingController;
    let service: MoviesService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [MoviesService],
            imports: [HttpClientTestingModule]
        });

        httpTestingController = TestBed.get(HttpTestingController);
        service = TestBed.get(MoviesService);
    });

    afterEach(() => {
        httpTestingController.verify();
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

});