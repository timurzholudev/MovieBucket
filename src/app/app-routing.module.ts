import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
    {
        path: '',
        loadChildren: './home/home.module#HomeModule'
    },
    {
        path: 'film/:id',
        loadChildren: './movie/movie.module#MovieModule'
    },
    {
        path: 'search/:req',
        loadChildren: './search/search.module#SearchModule'
    },
    {
        path: 'about',
        loadChildren: './about/about.module#AboutModule'
    },
    {
        path: '404',
        loadChildren: './not-found/not-found.module#NotFoundModule',
    },
    {
        path: '**',
        redirectTo: '404'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {
        initialNavigation: 'enabled',
    })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
