import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { HomeNavComponent } from './home-nav/home-nav.component';
import { HomeComponent } from './home/home.component';
import { HomeFooterComponent } from './home-footer/home-footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegistrationServiceService } from './registration-service.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { StudentHomeComponent } from './student/student-home/student-home.component';
import { StudentNavComponent } from './student/student-nav/student-nav.component';
import { AuthInterceptor } from './helpers/auth.intercepter';
import { AddStudentDetailsComponent } from './student/add-student-details/add-student-details.component';
import { StudentServiceService } from './student-service.service';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddPlacementDetailsComponent } from './admin/add-placement-details/add-placement-details.component';
import { AdminService } from './admin.service';
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


@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    routingComponents,
    HomeNavComponent,
    HomeComponent,
    HomeFooterComponent,
    StudentHomeComponent,
    StudentNavComponent,
    AddStudentDetailsComponent,
    AdminHomeComponent,
    AddPlacementDetailsComponent,
    ViewPlacementDetailsComponent,
    ViewAPlacementDetailsComponent,
    UpdatePlacementDetailsComponent,
    AddRepComponent,
    AddDepartmentComponent,
    MystudentsComponent,
    ViewStudentDetailsComponent,
    CreateResumeComponent,
    MyresumeComponent,
    AddComplaintComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    
    
    

  ],
  providers: [
    RegistrationServiceService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    StudentServiceService,
    AdminService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
