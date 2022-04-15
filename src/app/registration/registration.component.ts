import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { RegistrationServiceService } from '../registration-service.service';
import { User } from '../user';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  userrole:any;

  registration=new FormGroup({
    username:new FormControl('',[
      Validators.required
    ]),
    email:new FormControl('',[
      Validators.required,
      Validators.email
    ]),
    phone:new FormControl('',[
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(10),
      
    ]),
    department:new FormControl('',[
      Validators.required
    ])
    
  })
  get department(){
    return this.registration.get('department')

  }
  get username(){
    return this.registration.get('username')

  }
  get email(){
    return this.registration.get('email')

  }
  get phone(){
    return this.registration.get('phone')

  }
  user=new User(this.registration.value.username,this.registration.value.email,this.registration.value.phone,)
  register(){
    
    console.log(this.registration.value)
    let resp=this.service.doRegistration(this.registration.value)
    resp.subscribe((data)=>{
      console.log(data)

    });
  

  }

  constructor(private service:RegistrationServiceService) { }

  ngOnInit(): void {
    let a=new AppComponent()
    a.isuser=false
    console.log(a.isuser)
    this.service.getuserroles().subscribe((res:any)=>{
      console.log(res)
      this.userrole=res;
    })
  }

}
