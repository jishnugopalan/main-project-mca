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
    AddPlacementDetailsComponent
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
