import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
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
  constructor() { 
    
  }

  ngOnInit(): void {
  }

}
