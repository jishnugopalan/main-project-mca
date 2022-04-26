import { StudentServiceService } from './../../student-service.service';
import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/token-storage.service';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-student-home',
  templateUrl: './student-home.component.html',
  styleUrls: ['./student-home.component.css']
})
export class StudentHomeComponent implements OnInit {
username=""
isapproved=false;
photofilename=""
photo:any
fullname:any
department=""
  constructor(private tokenservice:TokenStorageService,private studentservice:StudentServiceService,private sanitizer: DomSanitizer) { }

  
  

  ngOnInit(): void {
    const user = this.tokenservice.getUser();
    console.log(user)
    this.username=user.username
    let userid=user.id;
    this.studentservice.viewstudentdetailsbyid(userid).subscribe(
      (data:any)=>{
        this.isapproved=true;
        console.log(data)
        
        this.studentservice.getDepartmentById(data.departmentid).subscribe((res:any)=>{
          this.department=res.department

        })



        console.log(data.userid)
        this.photofilename=data.photo
        console.log(this.photofilename)
        this.studentservice.getPhoto(this.photofilename).subscribe((res:any)=>{
          console.log(res)
          
          let url = window.URL.createObjectURL(res);

        this.photo = this.sanitizer.bypassSecurityTrustUrl(url);
        })
      },
      error=>{
        console.log(error.error.message)

      }
    )

    // if(this.isapproved==true){
    //   this.studentservice.getPhoto(this.photofilename).subscribe((res:any)=>{
    //     console.log(res)
    //   })

    // }
    this.studentservice.getUser(user.username).subscribe((res:any)=>{
      console.log(res)
      this.fullname=res.fullname
    })
  }

}
