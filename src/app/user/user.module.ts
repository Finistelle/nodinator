
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { UserComponent } from "./component/user.component";




@NgModule({
  declarations: [
    UserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    
  ],
  providers: []
})
export class UserModule { }