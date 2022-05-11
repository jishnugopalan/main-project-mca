import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { StudentHomeComponent } from './student/student-home/student-home.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { AddPlacementDetailsComponent } from './admin/add-placement-details/add-placement-details.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'registration-component',component:RegistrationComponent},
  {path:'student-home',component:StudentHomeComponent},
  {path:'admin-home',component:AdminHomeComponent},
  {path:'add-placement-details',component:AddPlacementDetailsComponent},



 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[RegistrationComponent,AddPlacementDetailsComponent]

