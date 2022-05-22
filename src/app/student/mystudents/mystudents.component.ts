import { Router } from '@angular/router';
import { StudentServiceService } from './../../student-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mystudents',
  templateUrl: './mystudents.component.html',
  styleUrls: ['./mystudents.component.css']
})
export class MystudentsComponent implements OnInit {

  constructor(private studentService:StudentServiceService,private router:Router) { }
student:any
getStudent(userid:any){
 console.log(userid)
 this.studentService.userid=userid
 this.router.navigateByUrl("/view-student-details")
 
}
  ngOnInit(): void {
    this.studentService.getAllStudentDetailsByDepartmentid(this.studentService.departmentid).subscribe((res:any)=>{
      console.log(res)
      let x=[]
      for(let i=0;i<res.length;i++){
        x.push({"fullname":res[i][2],"studentid":res[i][0],"userid":res[i][3],"isverified":res[0][1]})
      }
      this.student=x
    })
  }

}
