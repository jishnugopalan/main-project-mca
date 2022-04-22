import { TokenStorageService } from './../token-storage.service';
import { AuthserviceService } from './../authservice.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationServiceService } from '../registration-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  msg=""
  alert=false
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  loginform=new FormGroup({
    username:new FormControl('',[
      Validators.required,
      Validators.email
    ]),
    password:new FormControl('',Validators.required),
  })
  get username(){
    return this.loginform.get('username');
  }
  get password(){
    return this.loginform.get('password');
  }
data:any=[
{
"id":1,
"companyname":"TCS Digital Hiring",
"hiring_start_date":"14-01-2022",
"hiring_end_date":"15-02-2022",
"Eligibility":"MCA,B-Tech,M-Tech,CE",
"link":"www.tcs.com"

},
{
  "id":2,
  "companyname":"TCS Digital Hiring",
  "hiring_start_date":"14-01-2022",
  "hiring_end_date":"15-02-2022",
  "Eligibility":"MCA,B-Tech,M-Tech,CE",
  "link":"www.tcs.com"
},
{
    "id":3,
    "companyname":"TCS Digital Hiring",
    "hiring_start_date":"14-01-2022",
    "hiring_end_date":"15-02-2022",
    "Eligibility":"MCA,B-Tech,M-Tech,CE",
    "link":"www.tcs.com"
}
]
  constructor(private service:RegistrationServiceService,private router: Router,private authservice:AuthserviceService,private tokenStorage: TokenStorageService) { 
    
  }

  login(){
    console.log(this.loginform.value)
    this.authservice.login(this.loginform.value).subscribe(
      (data:any)=>{
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
        this.reloadPage();

    },
    error=>{
      console.log(error.error.message)
      this.alert=true
      this.msg=error.error.message
      

    }
    );
    
  }
  reloadPage(): void {
    window.location.reload();
  }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }
  }

}
