import { User, Role } from './../../user/model/user.model';
import { RepositoryService } from './../service/repository-service';

import { Observable } from 'rxjs/Rx';
import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ApiRepositoryService extends RepositoryService {
    private _role: Role[] = ['Administrateur' , 'Client' , 'Visiteur'];
    constructor(private _http: Http) {
        super();
    }
    public getUsers(): Observable<User[]> {
        return this._http.get('/api/user')
        //.delay(1000)
        .map((res: Response) => {
            
            return res.json().data;
        })
        .catch(err => {
            console.log(err);
            return Observable.throw(err);
        });
    }
    public getRole(): Observable<string[]> {
        return Observable.of(this._role);
    }
}
