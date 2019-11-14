import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieShellComponent } from './movie-shell.component';

describe('MovieShellComponent', () => {
    let component: MovieShellComponent;
    let fixture: ComponentFixture<MovieShellComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [MovieShellComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(MovieShellComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
