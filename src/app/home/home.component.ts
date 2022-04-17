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
  loginform=new FormGroup({
    email:new FormControl('',[
      Validators.required,
      Validators.email
    ]),
    password:new FormControl('',Validators.required),
  })
  get email(){
    return this.loginform.get('email');
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
  constructor(private service:RegistrationServiceService,private router: Router) { 
    
  }

  login(){
    console.log(this.loginform.value)
    this.service.login(this.loginform.value).subscribe(
      (data:any)=>{
       this.alert=false
      console.log(data)
      console.log(data.enabled)
      console.log(data.roles[0].name)
      if(data.enabled==true){
        if(data.roles[0].name=="student"){
          this.router.navigateByUrl("/student-home")

        }
      }

    },
    error=>{
      console.log(error.error.message)
      this.alert=true
      this.msg=error.error.message
      

    }
    );
    
  }

  ngOnInit(): void {
  }

}
