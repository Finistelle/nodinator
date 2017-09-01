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

  // gotoDetail(article: Article): void {
  //   this.selectedArticle = article;
  //   this.router.navigate(['articles/detail/', this.selectedArticle.id]);
  // }

  // addArticle(): void {
  //   this.router.navigate(['articles/detail', 0]);
  // }
}
