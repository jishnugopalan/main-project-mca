import { StudentServiceService } from 'src/app/student-service.service';
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
  otp=false
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
   
    password:new FormControl('',[
      Validators.required,
      Validators.minLength(6)
    ]),
    confirm_password:new FormControl('',[
      Validators.required,
      Validators.minLength(6)
    ])
    
  },{validators:this.checkPasswords})

  otpForm=new FormGroup({
    otp:new FormControl('',[Validators.required,Validators.minLength(6),Validators.maxLength(6)])
  })

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
  
  verifyOtp(){
    this.otpForm.value.email=this.registration.value.username
    console.log(this.otpForm.value)
    this.studentService.verifyOtp(this.otpForm.value).subscribe((res:any)=>{
      console.log(this.registration.value)
    this.auth.register(this.registration.value).subscribe(
      (data:any)=>{
        this.otp=false
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
   
    },error=>{
      console.log(error.error.message)
      alert(error.error.message)
    })
  }
  register(){
    console.log(this.registration.value.username)
    this.studentService.verifyEmail({"email":this.registration.value.username}).subscribe((res:any)=>{
      console.log(res)
      this.msg=res.message
      this.alert=true
     
    },error=>{
      this.studentService.verifyPhone(this.registration.value.phone).subscribe((res:any)=>{
        console.log(res)
        this.msg=res.message
        this.alert=true
      },error=>{
        console.log(error.error.message)
        this.studentService.sendOtp(this.registration.value.username).subscribe((res:any)=>{
        console.log(res)
        this.otp=true
        this.reg=false
        alert(res.message)
      })

      })
      
    })
    

    
    
  

  }

  constructor(private service:RegistrationServiceService,private auth:AuthserviceService,private studentService:StudentServiceService) { }

  ngOnInit(): void {
    
  }

}
