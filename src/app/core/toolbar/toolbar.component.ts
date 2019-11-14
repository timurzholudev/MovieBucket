import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router';

@Component({
    selector: 'toolbar',
    templateUrl: './toolbar.component.html',
    styleUrls: ['./toolbar.component.sass']
})
export class ToolbarComponent implements OnInit {

    constructor(
        private _fb: FormBuilder,
        private _router: Router
    ) { }

    form: FormGroup

    ngOnInit() {
        this.form = this._fb.group({
            'search': ['', Validators.required]
        });
    }

    search() {
        this._router.navigate(['search', this.form.get('search').value])
    }
}
