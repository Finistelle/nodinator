import { ResponseToken } from './../../model/response-token.model';
import { AuthService } from './../auth.service';
import { HttpService } from './../../http/http.service';
import { UserRepositoryService } from './../repository-service';
import { Observable } from 'rxjs/Rx';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { User, TypeCategorieUser } from "./../../model/user.model";
import { Router } from "@angular/router";

@Injectable()
export class UserService extends UserRepositoryService {
    private _categories: TypeCategorieUser[] = ['Client', 'Visiteur', 'Administrateur'];
    private _token: string;
    private localUser: User;
    private responseToken: ResponseToken;
    constructor(private _http: Http, private _router: Router) {
        super();
        this.localUser = new User;
    }

    public createAccount(user: User): Observable<string> {
        throw new Error("Method not implemented.");
    }
    public getAuthentification(): Observable<string> {
        throw new Error("Method not implemented.");
    }




    public addUser(user: User): Observable<User> {
        this.localUser = user;
        return this._http.post("/api/oauth/sign-in", user)
            .map((res: Response) => <User>res.json())
            .catch((err: Response) => { return this.error(err); });
    }


    public authentificate(user: User): Observable<string> {
        this.localUser = user;
        return this._http.post("/api/oauth/authenticate", user)
            .map((res: Response) => res.json().token
            )
            .catch((err: Response) => { return this.error(err); });
    }

    public getToken(user: User): string | undefined {
        if (!this._token) {
            let lS: string;
            lS = localStorage.getItem("token");
            return lS;
        }
        return this._token;
    }
    public setHeader(user: User): Headers | undefined {
        let token = this.getToken(user);
        if (token) {
            let headers = new Headers();
            headers.append("x-access-token", token);
            return headers;
        } else {
            this._router.navigate(['/login']);
        }
    }

    public getUsers(): Observable<User[]> {
        console.log(this.localUser);
        let token = this.getToken(this.localUser);
        let options = new RequestOptions;
        options.headers = new Headers;
        options.headers.set("x-access-token", token)

        return this._http.get('/api/users', options)
            .map((res: Response) => {

                return res.json().users;
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
