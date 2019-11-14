import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieRoutingModule } from './movie-routing.module';
import { MovieShellComponent } from './container/movie-shell.component';
import { MovieItemComponent } from './components/movie-item/movie-item.component';
import { SpinnerModule } from '@app/_ui/spinner/spinner.module';


@NgModule({
    imports: [
        CommonModule,
        MovieRoutingModule,
        SpinnerModule
    ],
    declarations: [
        MovieShellComponent,
        MovieItemComponent
    ],
})
export class MovieModule { }
