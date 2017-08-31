import { User } from './../model/user.model';
import { NgForm } from '@angular/forms';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
import { UserService } from "app/commun/service/user/user.service";

@Injectable()
export class AuthService {
    constructor(private _repo: UserService){}

    isLoggedIn = false;
    // store the URL so we can redirect after logging in
    redirectUrl: string;
    private _token?: string;
    private isAuthenticated: boolean;

    login(form:NgForm, authenticatedUser:User): Observable<boolean> {
        let isSave = false;
        if (form.valid) {
            this._repo.authentificate(authenticatedUser).subscribe((token:string)=>{
                this._token = token;
                localStorage.setItem(authenticatedUser.email,token)
                this.isAuthenticated = true;
            });
            return
        }
    }
    public getToken(): string | undefined {
        return this._token;
    }

    logout(): void {
        this.isLoggedIn = false;
    }

    public get $isAuthenticated(): boolean {
		return this.isAuthenticated;
	}

	public set $isAuthenticated(value: boolean) {
		this.isAuthenticated = value;
	}
}