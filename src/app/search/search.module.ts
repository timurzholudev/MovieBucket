import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './container/search.component';
import { MovieItemModule } from '@app/_ui/movie-item/movie-item.module';

@NgModule({
    imports: [
        CommonModule,
        SearchRoutingModule,
        MovieItemModule
    ],
    declarations: [
        SearchComponent,
    ],
})
export class SearchModule { }
