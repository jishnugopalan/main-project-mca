import { Router } from '@angular/router';
import { StudentServiceService } from './../../student-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-complaints',
  templateUrl: './get-complaints.component.html',
  styleUrls: ['./get-complaints.component.css']
})
export class GetComplaintsComponent implements OnInit {

  complaints:any=[]
  constructor(private studentService:StudentServiceService,private router:Router) { }

  viewComplaint(complaintid:any){
    console.log(complaintid)
    this.studentService.complaintid=complaintid
    this.router.navigateByUrl("/view-complaints")
  }
  ngOnInit(): void {

    this.studentService.getComplaintByDepartmentid(this.studentService.departmentid).subscribe((res:any)=>{
      console.log(res)
      this.complaints=res
    })
  }

}
