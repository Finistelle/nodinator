import { LoginComponent } from './commun/login/login.component';
import { AuthGuard } from './commun/service/auth-gard';

import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { UserComponent } from "./user/component/user.component";
import { UserListComponent } from "./user/component/userList.component";


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'user',
    children: [
      { path: "", canActivateChild: [AuthGuard], component: UserListComponent},
      { path: 'detail/:id', component: UserComponent, canActivateChild: [AuthGuard] },
      { path: 'form', component: UserComponent, canActivateChild: [AuthGuard] }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
