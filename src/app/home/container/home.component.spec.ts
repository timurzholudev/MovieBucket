// import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

// import { HomeComponent } from './home.component';
// import { By } from 'protractor';
// import { FilterComponent } from '../components/filter/filter.component';
// import { FilterPipe } from '@app/shared/pipes/filter-movie.pipe';
// import { MovieItemComponent } from '@app/_ui/movie-item/movie-item.component';
// import { EnumToArrayPipe } from '@app/shared/pipes/enum-to-Array.pipe';
// import { RouterTestingModule } from '@angular/router/testing';
// import { TestStore } from '@app/state/test.store';

// import * as fromRoot from 'app/state/index'
// import * as fromHome from '../state'
// import { Store } from '@ngrx/store';
// import { IMovie } from '@app/shared/models/movie.model';
// import { MoviesState } from '@app/state/movies/reducer';

// describe('HomeComponent', () => {
//     let component: HomeComponent;
//     let fixture: ComponentFixture<HomeComponent>;
//     let rootStore: TestStore<fromRoot.State>;
//     let homeStore: TestStore<fromHome.State>;

//     beforeEach(async(() => {
//         TestBed.configureTestingModule({
//             declarations: [HomeComponent, FilterComponent, FilterPipe, MovieItemComponent, EnumToArrayPipe],
//             imports: [RouterTestingModule],
//             providers: [
//                 { provide: Store, useClass: TestStore },
//             ]
//         })
//             .compileComponents();
//     }));

//     beforeEach(inject([Store], (testStore: TestStore<fromRoot.State>) => {
//         let st: MoviesState = {
//             moviesList: null,
//             isMoviesLoaded: false,
//             error: ''
//         }
//         rootStore = testStore;  // save store reference for use in tests                                  
//         rootStore.setState({ movies: st }); // set default state
//     }));

//     beforeEach(() => {
//         fixture = TestBed.createComponent(HomeComponent);
//         component = fixture.componentInstance;
//         fixture.detectChanges();
//     });

//     it('should create', () => {
//         expect(component).toBeTruthy();
//     });
// });
