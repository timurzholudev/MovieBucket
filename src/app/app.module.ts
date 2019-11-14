import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from 'environments/environment';
import { HttpClientModule } from '@angular/common/http'


// NGRX -->
import { StoreModule } from '@ngrx/store'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { EffectsModule } from '@ngrx/effects';
import { reducers } from './state'
import { MovieEffects } from './state/movies/effect'
// <-- NGRX END

import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';

import { AppComponent } from './app.component';

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        CoreModule,
        StoreModule.forRoot(reducers),
        EffectsModule.forRoot([MovieEffects]),
        StoreDevtoolsModule.instrument({
            name: 'Movies Bucket',
            maxAge: 25,
            logOnly: environment.production
        })
    ],
    declarations: [
        AppComponent,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
