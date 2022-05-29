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
import { AddDepartmentComponent } from './add-department/add-department.component';
import { MystudentsComponent } from './student/mystudents/mystudents.component';
import { ViewStudentDetailsComponent } from './student/view-student-details/view-student-details.component';
import { CreateResumeComponent } from './student/create-resume/create-resume.component';
import { MyresumeComponent } from './student/myresume/myresume.component';
import { AddComplaintComponent } from './student/add-complaint/add-complaint.component';
import { GetComplaintsComponent } from './student/get-complaints/get-complaints.component';
import { ViewComplaintsComponent } from './student/view-complaints/view-complaints.component';
import { ViewAdminComplaintComponent } from './admin/view-admin-complaint/view-admin-complaint.component';
import { ViewComplaintsToAdminComponent } from './admin/view-complaints-to-admin/view-complaints-to-admin.component';
import { AddResultsComponent } from './admin/add-results/add-results.component';
import { UpdateprofileComponent } from './student/updateprofile/updateprofile.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutComponent } from './about/about.component';

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
  {path:'add-rep',component:AddRepComponent},
  {path:'add-department',component:AddDepartmentComponent},
  {path:'mystudents',component:MystudentsComponent},
  {path:'view-student-details',component:ViewStudentDetailsComponent},
  {path:'create-resume',component:CreateResumeComponent},
  {path:'myresume',component:MyresumeComponent},
  {path:'add-complaint',component:AddComplaintComponent},
  {path:'get-complaints',component:GetComplaintsComponent},
  {path:'view-complaints',component:ViewComplaintsComponent},
  {path:'view-admin-complaint',component:ViewAdminComplaintComponent},
  {path:'view-admin-to-complaints',component:ViewComplaintsToAdminComponent},
  {path:'add-results',component:AddResultsComponent},
  {path:'updateprofile',component:UpdateprofileComponent},
  {path:'forgotpassword',component:ForgotpasswordComponent},
  {path:'contactus',component:ContactusComponent},
  {path:'about',component:AboutComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[RegistrationComponent,AddPlacementDetailsComponent,StudentHomeComponent,AdminHomeComponent,AddPlacementDetailsComponent,ViewPlacementDetailsComponent,
  UpdatePlacementDetailsComponent,AddRepComponent,AddDepartmentComponent,MystudentsComponent,ViewStudentDetailsComponent,CreateResumeComponent,MyresumeComponent,
  AddComplaintComponent,GetComplaintsComponent,ViewComplaintsComponent,ViewAdminComplaintComponent,ViewComplaintsToAdminComponent,AddResultsComponent,UpdateprofileComponent,
  ForgotpasswordComponent,ContactusComponent,AboutComponent]

