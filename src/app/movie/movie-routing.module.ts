import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieShellComponent } from './container/movie-shell.component';


const routes: Routes = [
    {
        path: '',
        component: MovieShellComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MovieRoutingModule { }
