import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavComponent } from './side-nav/side-nav.component';
import { FooterComponent } from './footer/footer.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        SideNavComponent,
        FooterComponent,
        ToolbarComponent
    ],
    providers: [

    ],
    exports: [
        SideNavComponent,
        FooterComponent,
        ToolbarComponent
    ]
})
export class CoreModule { }