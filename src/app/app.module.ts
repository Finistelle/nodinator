
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
// import { RepositoryService } from "./commun/service/repository-service";
import { UserComponent } from "./user/component/user.component";
import { LayoutComponent } from "./commun/layout/layout.component";
import { FooterComponent } from "./commun/layout/footer/footer.component";

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    LayoutComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    
  ],
  // providers: [
  //   {provide: RepositoryService, useClass: ApiRepositoryService}
  // ],
  bootstrap: [AppComponent]

})
export class AppModule { }
