import { AuthserviceService } from './../authservice.service';
import { FormGroup, FormControl, Validators, AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';
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
  dep:any
  reg=false
  alert=false
  msg=""

  checkPasswords: ValidatorFn = (group: AbstractControl):  ValidationErrors | null => { 
    let pass = group.get('password')?.value
    let confirmPass = group.get('confirm_password')?.value
    return pass === confirmPass ? null : { notSame: true }
  }
  registration=new FormGroup({
    fullname:new FormControl('',[
      Validators.required
    ]),
    username:new FormControl('',[
      Validators.required,
      Validators.email
    ]),
    phone:new FormControl('',[
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(10),
      
      
    ]),
    // department:new FormControl('',[
     
    // ]),
    password:new FormControl('',[
      Validators.required,
      Validators.minLength(6)
    ]),
    confirm_password:new FormControl('',[
      Validators.required,
      Validators.minLength(6)
    ])
    
  },{validators:this.checkPasswords})

  

  get department(){
    return this.registration.get('department')

  }
  get fullname(){
    return this.registration.get('fullname')

  }
  get username(){
    return this.registration.get('username')

  }
  get phone(){
    return this.registration.get('phone')

  }
  get password(){
    return this.registration.get('password')
  }
  get confirm_password(){
    return this.registration.get('confirm_paswword')
  }
  //user=new User(this.registration.value.username,this.registration.value.email,this.registration.value.phone,)
  register(){
    
    console.log(this.registration.value)
    this.auth.register(this.registration.value).subscribe(
      (data:any)=>{
        this.alert=false
        this.reg=true
      console.log(data)

    },
    error=>{
      console.log(error.error.message)
      this.msg=error.error.message
      this.alert=true

    }
    );
  

  }

  constructor(private service:RegistrationServiceService,private auth:AuthserviceService) { }

  ngOnInit(): void {
    
    
    // this.service.getDepartment().subscribe((res:any)=>{
    //  console.log(res);
    //  this.dep=res;

    // })
   
  }

}
