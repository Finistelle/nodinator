
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Article } from '../model/article.model';

@Injectable()
export abstract class ArticleRepositoryService {

  public abstract getArticles(): Observable<Article[]>;

  // public abstract addArticle(article: Article): Observable<Response>;

  /*public abstract getArticle(id: number): Article;*/

}
