import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
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

  constructor() { }

  ngOnInit(): void {
    let a=new AppComponent()
    a.isuser=false
    console.log(a.isuser)
  }

}
