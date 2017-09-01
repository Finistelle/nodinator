import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ResponseToken } from './../model/response-token.model';
import {Headers} from '@angular/http';
import { Router } from '@angular/router';
import { User } from './../model/user.model';
import { NgForm } from '@angular/forms';
import { Injectable, ViewContainerRef } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
import { UserService } from "app/commun/service/user/user.service";

@Injectable()
export class AuthService {
    constructor(private _repo: UserService, private _router: Router) {
    }

    redirectUrl: string;
    private _token?: string;
    private isAuthenticated: boolean;
    private localUser: User;



    login(form: NgForm, authenticatedUser: User): Observable<boolean> {
        let isSave = false;
        if (form.valid) {
            this._repo.authentificate(authenticatedUser).subscribe((token: string) => {
                localStorage.setItem("token", token);
                this.isAuthenticated = true;
                this.localUser = authenticatedUser;
                this._token = token;
                this._router.navigateByUrl('/articles');
            });
            return
        }
    }


    logout(): void {
        this.isAuthenticated = false;
        localStorage.clear();
    }

    public get $isAuthenticated(): boolean {
        
        return this.isAuthenticated;

    }


    public set $isAuthenticated(value: boolean) {
        this.isAuthenticated = value;
    }
	public get $localUser(): User {
		return this.localUser;
	}

	public set $localUser(value: User) {
		this.localUser = value;
	}
}