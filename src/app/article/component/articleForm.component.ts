// import { Router } from '@angular/router';
import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {Article} from '../../commun/model/article.model';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import {NgForm} from '@angular/forms';
import {ArticleService} from '../../commun/service/article/article.service';
import {Response} from '@angular/http';

@Component({
  selector: 'nod-article-form',
  templateUrl: './articleForm.component.html'
})
export class ArticleFormComponent implements OnInit {
  private newArticle: Article;
  constructor(
    private _repo: ArticleService,
    public toastr: ToastsManager,
    vcr: ViewContainerRef
  ) {
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit(): void {
  }

  save(form: NgForm): boolean {
    let isSave = false;
    if (form.valid) {
      this._repo.addArticle(this.newArticle).subscribe((article: Article) => {
        isSave = true;
      }, (err: Response) => {
        this.toastr.error('error status: ' + err.status + ' ' + 'error:' + err);
      });
    }
    return isSave;
  }
}
