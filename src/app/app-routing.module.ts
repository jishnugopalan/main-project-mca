import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { StudentHomeComponent } from './student/student-home/student-home.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { AddPlacementDetailsComponent } from './admin/add-placement-details/add-placement-details.component';
import { ViewPlacementDetailsComponent } from './admin/view-placement-details/view-placement-details.component';
import { ViewAPlacementDetailsComponent } from './admin/view-a-placement-details/view-a-placement-details.component';
import { UpdatePlacementDetailsComponent } from './admin/update-placement-details/update-placement-details.component';
import { AddRepComponent } from './admin/add-rep/add-rep.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'registration-component',component:RegistrationComponent},
  {path:'student-home',component:StudentHomeComponent},
  {path:'admin-home',component:AdminHomeComponent
  },
  {path:'add-placement-details',component:AddPlacementDetailsComponent},
  {path:'view-placement-details',component:ViewPlacementDetailsComponent},
  {path:'placement-details',component:ViewAPlacementDetailsComponent},
  {path:'update-placement-details',component:UpdatePlacementDetailsComponent},
  {path:'add-rep',component:AddRepComponent}







 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[RegistrationComponent,AddPlacementDetailsComponent,StudentHomeComponent,AdminHomeComponent,AddPlacementDetailsComponent,ViewPlacementDetailsComponent,
  UpdatePlacementDetailsComponent,AddRepComponent]

