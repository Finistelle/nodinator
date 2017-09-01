import { CustomOption } from './commun/service/toast-option';
import { ToastModule, ToastOptions } from 'ng2-toastr/ng2-toastr';
import { AuthService } from './commun/service/auth.service';

import { LoginComponent } from './commun/login/login.component';
import { NavComponent } from './commun/layout/nav/nav.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UserComponent } from "./user/component/user.component";
import { LayoutComponent } from "./commun/layout/layout.component";
import { FooterComponent } from "./commun/layout/footer/footer.component";
import { UserListComponent } from "./user/component/userList.component";
import { UserService } from "./commun/service/user/user.service";
import { ArticleService } from "./commun/service/article/article.service";
import { UserRepositoryService } from "app/commun/service/repository-service";
import { ArticleRepositoryService } from "app/commun/service/repository-service";
import { AppRoutingModule } from "./app.routing.module";
import { ArticleListComponent } from './article/component/articleList.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { ArticleComponent } from './article/component/article.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    LayoutComponent,
    FooterComponent,
    UserListComponent,
    NavComponent,
    LoginComponent,
    ArticleListComponent,
    ArticleComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ToastModule.forRoot(),
    NgxPaginationModule
  ],
  providers: [
    { provide: UserRepositoryService, useClass: UserService },
    {provide: ToastOptions, useClass: CustomOption},
    { provide: ArticleRepositoryService, useClass: ArticleService },
    UserService,
    ArticleService,
    AuthService
  ],
  bootstrap: [AppComponent]

})
export class AppModule { }
