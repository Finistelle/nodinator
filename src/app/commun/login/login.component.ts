

import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { AuthService } from "./../../commun/service/auth-gard-service";

@Component({
    templateUrl: 'login.component.html'
})
export class LoginComponent {

    constructor(private _auth: AuthService, private _router:Router) { }

    login() {
        this._auth.login();
        // this._router.navigate(['/catalogue']);
    }
}
