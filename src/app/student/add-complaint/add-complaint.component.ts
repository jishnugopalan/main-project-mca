import { Router } from '@angular/router';
import { StudentServiceService } from './../../student-service.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/token-storage.service';

@Component({
  selector: 'app-add-complaint',
  templateUrl: './add-complaint.component.html',
  styleUrls: ['./add-complaint.component.css']
})
export class AddComplaintComponent implements OnInit {
user:any
complaints:any=[]
  constructor(private tokenservice:TokenStorageService,private studentService:StudentServiceService,private router:Router) { }
complaintForm=new FormGroup({
  complaint_sub:new FormControl('',[Validators.required,Validators.maxLength(150),Validators.minLength(3)]),
  complaint:new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(1000)])
})
addComplaint(){
  this.complaintForm.value.user=this.user;
  console.log(this.complaintForm.value)
  this.studentService.addComplaint(this.complaintForm.value).subscribe((res:any)=>{
    console.log(res)
    alert("Complaint submitted successfully")
    this.ngOnInit()
  })
}
viewReplay(complaintid:any){
console.log(complaintid)
this.studentService.complaintid=1
this.router.navigateByUrl("/view-complaints")
}
  ngOnInit(): void {
    const user = this.tokenservice.getUser();
    let userid=user.id;
    this.studentService.getUser(user.username).subscribe((res:any)=>{
      console.log(res)
      this.user=res
      
    })
    this.studentService.getComplaintByUserid(userid).subscribe((res:any)=>{
      console.log(res)
      this.complaints=res
    })
  }

}
