import { User } from './../../user/model/user.model';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';

@Injectable()
export abstract class RepositoryService {

    public abstract getUsers(): Observable<User[]>;

    public abstract getRole(): Observable<string[]>;

}