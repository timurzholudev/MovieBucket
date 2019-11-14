import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//NGRX -->
import { StoreModule } from '@ngrx/store';
import { reducer } from './state/reducer'
import { EffectsModule } from '@ngrx/effects';
// import { HomeEffects } from './state/effects';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './container/home.component';
import { MovieItemModule } from '@app/_ui/movie-item/movie-item.module';
// import { MovieItemComponent } from './components/movie-item/movie-item.component';


@NgModule({
    imports: [
        CommonModule,
        HomeRoutingModule,
        StoreModule.forFeature('home', reducer),
        MovieItemModule,
        // EffectsModule.forFeature([HomeEffects])
    ],
    declarations: [
        HomeComponent,
        // MovieItemComponent
    ],
})
export class HomeModule { }
