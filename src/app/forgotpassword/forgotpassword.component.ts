import { Router } from '@angular/router';
import { StudentServiceService } from 'src/app/student-service.service';
import { FormGroup, FormControl, Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {
error:any
otp=false
email=true;
pass=false;
checkPasswords: ValidatorFn = (group: AbstractControl):  ValidationErrors | null => { 
  let pass = group.get('password')?.value
  let confirmPass = group.get('confirm_password')?.value
  return pass === confirmPass ? null : { notSame: true }
}
passwordForm=new FormGroup({
  password:new FormControl('',[
    Validators.required,
    Validators.minLength(6)
  ]),
  confirm_password:new FormControl('',[
    Validators.required,
    Validators.minLength(6)
  ])

},{validators:this.checkPasswords})
  emailForm=new FormGroup({
    email:new FormControl('',[Validators.required,Validators.email])
  })
  otpForm=new FormGroup({
    otp:new FormControl('',[Validators.required,Validators.minLength(6),Validators.maxLength(6)])
  })
  verifyEmail(){
    console.log(this.emailForm.value)
    this.studentService.verifyEmail(this.emailForm.value).subscribe((res:any)=>{
      console.log(res)
     
    this.studentService.sendOtp(this.emailForm.value.email).subscribe((res:any)=>{
      console.log(res)
      this.otp=true
      this.email=false
    })
    },error=>{
      console.log(error.error.message)
      this.error=error.error.message
    })
    
  }
  get password(){
    return this.passwordForm.get('password')
  }
  get confirm_password(){
    return this.passwordForm.get('confirm_paswword')
  }
  updatePassword(){
    this.studentService.getUnknownUser(this.emailForm.value.email).subscribe((res:any)=>{
      console.log(res)
      this.passwordForm.value.id=res.id

    console.log(this.passwordForm.value)
    this.studentService.updatePassword(this.passwordForm.value).subscribe((res:any)=>{
      console.log(res)
      alert(res.message)
      this.router.navigateByUrl("/home")
    })
      
    })
    
  }
  verifyOtp(){
    this.otpForm.value.email=this.emailForm.value.email
    console.log(this.otpForm.value)
    this.studentService.verifyOtp(this.otpForm.value).subscribe((res:any)=>{
      console.log(res)
      this.otp=false
      this.pass=true
    },error=>{
      console.log(error.error.message)
      this.error=error.error.message
    })

  }
  constructor(private studentService:StudentServiceService,private router:Router) { }

  ngOnInit(): void {
  
  }

}
