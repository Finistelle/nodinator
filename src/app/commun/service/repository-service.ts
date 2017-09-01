import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { User } from "./../model/user.model";
import { Article } from "../model/article.model";

@Injectable()
export abstract class UserRepositoryService {
    public abstract createAccount(user:User): Observable<string>;
    public abstract getAuthentification():Observable<string>;
    public abstract getUsers(): Observable<User[]>;

    public abstract getRoles(): Observable<string[]>;

}

@Injectable()
export abstract class ArticleRepositoryService {
  public abstract getArticles(): Observable<Article[]>;
}
