import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { AuthService } from './../service/auth.service';
import { User } from './../model/user.model';
import { NgForm } from '@angular/forms';
import { Component, ViewContainerRef } from '@angular/core';

@Component({
    templateUrl: 'login.component.html'
})
export class LoginComponent {
    private user: User;

    constructor(private _auth: AuthService, public toastr: ToastsManager, vcr: ViewContainerRef) {
        this.toastr.setRootViewContainerRef(vcr);
        this.user = new User;
    }

    login(form: NgForm): void {
        let isLog = this._auth.login(form, this.user);
        if(isLog){
            this.toastr.success("connection");
        }
    }
}
