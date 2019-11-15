import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { GenreType } from '@app/shared/enums/genre.enum';
import { Observable } from 'rxjs';

@Component({
    selector: 'filter',
    templateUrl: './filter.component.html',
    styleUrls: ['./filter.component.sass']
})
export class FilterComponent implements OnInit {

    @Input() filterList: string[]
    @Output() newFilterList = new EventEmitter<string[]>()

    public GenreType = GenreType

    constructor() { }

    ngOnInit() {
    }

    test(val) {
        let index = this.filterList.findIndex(item => item === val.toLowerCase());
        if (index != -1)
            this.filterList.splice(index, 1);
        else
            this.filterList.push(val.toLowerCase())
        this.newFilterList.emit(this.filterList);
    }
}

