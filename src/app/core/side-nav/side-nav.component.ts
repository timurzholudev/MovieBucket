import { Component, OnInit } from '@angular/core';
import { slideInAnimation } from '@app/shared/animations/sldie-in.animation';

@Component({
    selector: 'side-nav',
    templateUrl: './side-nav.component.html',
    styleUrls: ['./side-nav.component.sass'],
    animations: [slideInAnimation]
})
export class SideNavComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

}
