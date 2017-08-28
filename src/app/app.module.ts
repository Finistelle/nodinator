import { UserModule } from './user/user.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RepositoryService } from "./commun/service/repository-service";
import { ApiRepositoryService } from "./commun/service/api-repository-service";
import { UserComponent } from "./user/component/user.component";

@NgModule({
  declarations: [
    AppComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  // providers: [
  //   {provide: RepositoryService, useClass: ApiRepositoryService}
  // ],
  bootstrap: [AppComponent]

})
export class AppModule { }
