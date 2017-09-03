// import { Router } from '@angular/router';
import { Article } from '../../commun/model/article.model';
import { ArticleService } from '../../commun/service/article/article.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nod-article-list',
  templateUrl: './articleList.component.html'
})
export class ArticleListComponent implements OnInit {
  private articles: Article[];
  p: number = 1;

  constructor(private _repo: ArticleService) { }

  ngOnInit(): void {
    this._repo.getArticles().subscribe((articles: Article[]) => this.articles = articles);
  }
}
