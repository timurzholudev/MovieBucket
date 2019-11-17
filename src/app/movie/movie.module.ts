import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieRoutingModule } from './movie-routing.module';
import { MovieShellComponent } from './container/movie-shell.component';
import { MovieDescriptionComponent } from './components/movie-description/movie-description.component';
import { SpinnerModule } from '@app/_ui/spinner/spinner.module';


@NgModule({
    imports: [
        CommonModule,
        MovieRoutingModule,
        SpinnerModule
    ],
    declarations: [
        MovieShellComponent,
        MovieDescriptionComponent
    ],
})
export class MovieModule { }
