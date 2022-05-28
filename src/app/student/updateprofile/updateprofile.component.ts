import { StudentServiceService } from './../../student-service.service';
import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/token-storage.service';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-updateprofile',
  templateUrl: './updateprofile.component.html',
  styleUrls: ['./updateprofile.component.css']
})
export class UpdateprofileComponent implements OnInit {
profile:any
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

  
},{validators:this.checkPasswords})
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
  constructor(private tokenservice:TokenStorageService,private studentservice:StudentServiceService) { }
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
    return this.passwordForm.get('password')
  }
  get confirm_password(){
    return this.passwordForm.get('confirm_paswword')
  }
  onSubmit(){
    this.registration.value.id=this.profile.id
    console.log(this.registration.value)
    this.studentservice.updateProfile(this.registration.value).subscribe((res:any)=>{
      console.log(res)
      alert(res.message)
      this.ngOnInit()
    })
  }
  updatePassword(){
    this.passwordForm.value.id=this.profile.id
    console.log(this.passwordForm.value)
    this.studentservice.updatePassword(this.passwordForm.value).subscribe((res:any)=>{
      console.log(res)
    })
  }
  ngOnInit(): void {
    const user = this.tokenservice.getUser();
    console.log(user)
    
    this.studentservice.getUser(user.username).subscribe((res:any)=>{
      console.log(res)
      this.profile=res
      this.registration.value.fullname=res.fullname
    
      
    })
  }

}
