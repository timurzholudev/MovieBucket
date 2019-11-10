import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//NGRX -->
import { StoreModule } from '@ngrx/store';
import { reducer } from './state/reducer'
import { EffectsModule } from '@ngrx/effects';
import { HomeEffects } from './state/effects';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './container/home.component';


@NgModule({
    declarations: [HomeComponent],
    imports: [
        CommonModule,
        HomeRoutingModule,
        StoreModule.forFeature('home', reducer),
        EffectsModule.forFeature([HomeEffects])
    ]
})
export class HomeModule { }
