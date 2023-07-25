import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { MainscreenComponent } from './mainscreen/mainscreen.component';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { SearchComponent } from './search/search.component';
import { AfterLoginComponent } from './after-login/after-login.component';

const routes: Routes = [
  
 {path:"", component:MainscreenComponent  ,
 children:[
  {path:'searchpage',component:SearchComponent}
 ] 
                  



},
 {path: 'loginpage',component:LoginComponent} ,
 {path:'signuppage',component:SignupComponent},
 {path:'after-login',component:AfterLoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
