import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { StudentServiceService } from 'src/app/student-service.service';
import { TokenStorageService } from 'src/app/token-storage.service';

@Component({
  selector: 'app-view-complaints-to-admin',
  templateUrl: './view-complaints-to-admin.component.html',
  styleUrls: ['./view-complaints-to-admin.component.css']
})
export class ViewComplaintsToAdminComponent implements OnInit {
  complaints:any
  isReply=true
  user:any
  reply:any
  replyForm=new FormGroup({
    reply:new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(1000)])
  })
  constructor(private studentService:StudentServiceService,private tokenservice:TokenStorageService) { }
  onSubmit(){
    this.replyForm.value.complaint=this.complaints
    this.replyForm.value.user=this.user
    console.log(this.replyForm.value)
    this.studentService.sendComplaintReply(this.replyForm.value).subscribe((res:any)=>{
      console.log(res)
      alert(res.message)
      this.ngOnInit()
    })
  }
  ngOnInit(): void {
    this.studentService.getComplaintById(this.studentService.complaintid).subscribe((res:any)=>{
      console.log(res)
      this.complaints=res
      if(res.complaint_status=='send to admin'){
        this.isReply=false
      }
    })
    const user = this.tokenservice.getUser();
    console.log(user)
    this.studentService.getUser(user.username).subscribe((res:any)=>{
      console.log(res)
      this.user=res
      
    })
    this.studentService.getComplaintReplyById(this.studentService.complaintid).subscribe((res:any)=>{
      console.log(res)
      if(res==null){
        this.isReply=true
      }
      else{
        this.reply=res
        this.isReply=false
      }
    })


  }

}
