import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDescriptionComponent } from './movie-description.component';
import { SpinnerModule } from '@app/_ui/spinner/spinner.module';
import { RouterTestingModule } from '@angular/router/testing';

describe('MovieDescriptionComponent', () => {
    let component: MovieDescriptionComponent;
    let fixture: ComponentFixture<MovieDescriptionComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [MovieDescriptionComponent],
            imports: [
                SpinnerModule,
                RouterTestingModule
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(MovieDescriptionComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
