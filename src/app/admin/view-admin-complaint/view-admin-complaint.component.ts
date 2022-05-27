import { Router } from '@angular/router';
import { StudentServiceService } from './../../student-service.service';
import { AdminService } from 'src/app/admin.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-admin-complaint',
  templateUrl: './view-admin-complaint.component.html',
  styleUrls: ['./view-admin-complaint.component.css']
})
export class ViewAdminComplaintComponent implements OnInit {
complaints:any=[]
  constructor(private adminService:AdminService,private studentService:StudentServiceService,private router:Router) { }
  viewComplaint(complaintid:any){
    console.log(complaintid)
    this.studentService.complaintid=complaintid
    this.router.navigateByUrl("/view-admin-to-complaints")
  }
  ngOnInit(): void {
    this.adminService.getAllAdminComplaints().subscribe((res:any)=>{
      console.log(res)
      for(let i=0;i<res.length;i++){

        this.complaints.push(res[i])
      }
      console.log(this.complaints)
      
    })
  }

}
