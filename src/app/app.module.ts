
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
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
import { UserRepositoryService } from "app/commun/service/repository-service";
import { AppRoutingModule } from "./app.routing.module";

// const APPROUTES: Routes = [
//   {
//       path: 'user',
//       children: [
//           {
//               path: '',
//               redirectTo: 'user',
//               pathMatch: 'full'
//           },
//           {
//               path: 'user',
//               component: UserListComponent
//           },
//           // {
//           //     path: 'user/:id',
//           //     component: EditUserComponent
//           // }
//       ]
//   }
// ];

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
    // RouterModule.forRoot(APPROUTES),
    AppRoutingModule
  ],
  providers: [
    { provide: UserRepositoryService, useClass: UserService },
    UserService
  ],
  bootstrap: [AppComponent]

})
export class AppModule { }
