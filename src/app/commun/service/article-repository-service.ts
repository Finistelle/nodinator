
// import { observable } from 'rxjs/symbol/observable';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Article } from '../model/article.model';
// import { Response } from '@angular/http';

@Injectable()
export abstract class ArticleRepositoryService {

  public abstract getArticles(): Observable<Article[]>;

  public abstract getArticle(id: number): Observable<Article>;

  // public abstract addArticle(article: Article): Observable<Response>;

}
