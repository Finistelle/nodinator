import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { Response } from '@angular/http';
// import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Article } from '../../commun/model/article.model';
import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ArticleService } from '../../commun/service/article/article.service';

@Component({
  selector: 'nod-article',
  templateUrl: 'article.component.html'
})
export class ArticleComponent implements OnInit {

  private articleId: number;
  private article: Article;

  constructor(private _repo: ArticleService,
              private activatedRoute: ActivatedRoute,
              public toastr: ToastsManager, vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.articleId = params['id'];
      this.getArticle();
    });

  }

  getArticle(): void {
    this._repo.getArticle(this.articleId).subscribe((article: Article) => {
      this.article = article;
    }, (err: Response) => {
      this.toastr.error('error status: ' + err.status + ' ' + 'error:' + err);
    });
  }
  // save(form: NgForm): boolean {
  //   let isSave = false;
  //   if (form.valid) {
  //     this._repo.createAccount(this.newUser).subscribe((user: User) => {
  //       this.userList.push(user);
  //       isSave = true;
  //     }, (err: Response) => {
  //       this.toastr.error("statut de l'erreur: " + err.status + " " + "erreur:" + err);
  //     })
  //   }
  //   return isSave;
  // }
}
