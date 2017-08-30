import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { User } from "./../model/user.model";

@Injectable()
export abstract class UserRepositoryService {

    public abstract getUsers(): Observable<User[]>;

    public abstract getRoles(): Observable<string[]>;

}
