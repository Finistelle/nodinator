import { User } from './../model/user.model';
import { NgForm } from '@angular/forms';


import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { AuthService } from "./../../commun/service/auth-gard-service";

@Component({
    templateUrl: 'login.component.html'
})
export class LoginComponent {
    private user: User;

    constructor(private _auth: AuthService, private _router:Router) { 
        this.user = new User;
    }

    login(form:NgForm):void {
        console.log("connection");
        this._auth.login(form, this.user);
        // this._router.navigate(['/catalogue']);
    }
}
