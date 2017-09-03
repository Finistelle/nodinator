import { Body } from '@angular/http/src/body';
import { ArticleRepositoryService } from '../article-repository-service';
import { Injectable } from '@angular/core';
import { Headers, Http, Response, /*RequestOptions*/ } from '@angular/http';
import {Article/*, status*/} from '../../model/article.model';
import { Observable} from 'rxjs/Rx';
/*
import { UserService} from '../user/user.service';
import { Router } from "@angular/router";
*/


@Injectable()
export class ArticleService extends ArticleRepositoryService {

  // private _status: status[] = ['PUBLISH', 'DRAFT'];
  private _headers: Headers;
  private _body: Body;

  constructor(private _http: Http, /*private userService: UserService, private router: Router*/) {
    super();
  }

  public getArticles(): Observable<Article[]> {
    return this._http.get('/api/public/articles')
      .map((res: Response) => {
        return res.json();
      })
      .catch(err => {
        console.log(err);
        return Observable.throw(err);
      });
  }

  public getArticle(id: number): Observable<Article> {
    return this._http.get(`/api/public/article/${id}`)
      .map((res: Response) => {
        return res.json().article;
      })
      .catch(err => {
        console.log(err);
        return Observable.throw(err);
      });
  }

  public addArticle(article: Article): Observable<Article> {
    console.log(this._body);
    console.log(this._headers);
    return this._http.post('/api/articles/add', this._body, this._headers)
      .map((res: Response) => {
        return res.json().data;
      })
      .catch(err => {
        console.log(err);
        return Observable.throw(err);
      });
  }
}
