import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
    selector: 'spinner',
    templateUrl: './spinner.component.html',
    styleUrls: ['./spinner.component.sass']
})
export class SpinnerComponent implements OnInit, AfterViewInit {

    @Input() dimension: number = 50;
    @ViewChild('spinner', { static: false }) spinner: ElementRef

    constructor() { }

    ngOnInit() {
    }

    ngAfterViewInit() {
        console.log("!!!!!!!!!!!!!!!")
        console.log(this.spinner.nativeElement.offsetWidth)
        this.spinner.nativeElement.style.width = `${50}px`;
        this.spinner.nativeElement.style.height = `${50}px`;
    }

}
