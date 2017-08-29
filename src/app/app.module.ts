
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
// import { RepositoryService } from "./commun/service/repository-service";
import { UserComponent } from "./user/component/user.component";
import { LayoutComponent } from "./commun/layout/layout.component";
import { FooterComponent } from "./commun/layout/footer/footer.component";
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryUserDataService } from "./commun/in-memory/in-memory.data";
import { UserListComponent } from "./user/component/userList.component";
import { UserService } from "./commun/service/user/user.service";
import { RepositoryService } from "app/commun/service/repository-service";

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    LayoutComponent,
    FooterComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryUserDataService),
    
  ],
  providers: [
    { provide: RepositoryService, useClass: UserService },
    UserService
  ],
  bootstrap: [AppComponent]

})
export class AppModule { }
