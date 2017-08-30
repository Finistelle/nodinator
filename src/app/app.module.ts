import { HttpService} from './commun/http/http.service';
import { NavComponent } from './commun/layout/nav/nav.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule, RequestOptions, XHRBackend } from '@angular/http';

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
    UserListComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryUserDataService),
    AppRoutingModule,

  ],
  providers: [
    { provide: UserRepositoryService, useClass: UserService },
    UserService,
    {
      provide: HttpService,
      useFactory: (backend: XHRBackend, options: RequestOptions) => {
        return new HttpService(backend, options);
      },
      deps: [XHRBackend, RequestOptions]
    }
  ],
  bootstrap: [AppComponent]

})
export class AppModule { }
