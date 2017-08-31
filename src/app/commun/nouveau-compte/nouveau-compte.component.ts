import { NgForm } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
    selector: 'frm-nouveau-compte',
    templateUrl: './nouveau-compte.component.html'
})
export class NouveauCompteComponent implements OnInit {

    @ViewChild(NgForm) ncForm: NgForm;

    user = {};

    constructor() {

    }

    ngOnInit() {
    }

    save(ncForm: NgForm) {
        if (ncForm.valid) {
            console.log(ncForm);
            console.log(this.user);
        }

    }

    debug(data: any) {
        console.log(data);
    }
}
