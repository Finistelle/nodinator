import { HttpService } from './../../http/http.service';
import { UserRepositoryService } from './../repository-service';
import { Observable } from 'rxjs/Rx';
import { Headers, Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { User, TypeCategorieUser } from "./../../model/user.model";
import { AuthService } from "app/commun/service/auth-gard-service";
import { Router } from "@angular/router";

@Injectable()
export class UserService extends UserRepositoryService {
    private _categories: TypeCategorieUser[] = ['Client', 'Visiteur', 'Administrateur'];

    constructor(private _http: Http, private _router: Router) {
        super();
    }

    public createAccount(user: User): Observable<string> {
        throw new Error("Method not implemented.");
    }
    public getAuthentification(): Observable<string> {
        throw new Error("Method not implemented.");
    }
    private setHeader(): Headers | undefined {
        let token ="";
        if (token) {
            let headers = new Headers();
            headers.append("x-access-token", token);
            return headers;
        } else {
            this._router.navigate(['/login']);
        }
    }



    public addUser(user: User): Observable<User> {
        return this._http.post("/api/oauth/sign-in", user)
            .map((res: Response) => <User>res.json())
            .catch((err: Response) => { return this.error(err); });
    }


    public authentificate(user: User): Observable<string> {

        return this._http.post("/api/oauth/authenticate", user)
            .map((res: Response) => res.json())
            .catch((err: Response) => { return this.error(err); });
    }



    public getUsers(): Observable<User[]> {
        return this._http.get('/api/users', )
            .map((res: Response) => {

                return res.json().data;
            })
            .catch(err => {
                console.log(err);
                return Observable.throw(err);
            });
    }

    public getRoles(): Observable<string[]> {
        return Observable.of(this._categories);
    }

    private error(error: Response): Observable<any> {
        if (error.status === 401 || error.status === 403) {
            this._router.navigateByUrl('/login');
            return Observable.throw(error);
        } else {
            return Observable.throw(error);
        }
    }

}
