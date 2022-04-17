import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { StudentHomeComponent } from './student/student-home/student-home.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'registration-component',component:RegistrationComponent},
  {path:'student-home',component:StudentHomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[RegistrationComponent]