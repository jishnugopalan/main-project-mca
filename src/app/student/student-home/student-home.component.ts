import { AdminService } from 'src/app/admin.service';
import { StudentServiceService } from './../../student-service.service';
import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/token-storage.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import {saveAs as importedSaveAs} from "file-saver";
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
batchname=""
placementDetails:any
isFilled=false
results:any=[]
  constructor(private router: Router,private tokenservice:TokenStorageService,private studentservice:StudentServiceService,private sanitizer: DomSanitizer,private adminService:AdminService) { }
  updateProfile(){
    this.router.navigateByUrl("/updateprofile")
  }
  goto(url:any){
    console.log(url)
    
    let jwt=this.tokenservice.getToken();
    this.router.ngOnDestroy();
    
    window.location.href = encodeURI("https://"+url);
    //window.location.replace(url.toString());
    //window.open(url.toString(), "_blank");
  }
  download(file:any){
    this.studentservice.getPhoto(file).subscribe((res:any)=>{
      console.log(res)
      importedSaveAs(res, file);
    })

  }
  showResult(filename:any){
    console.log(filename)
  
    this.studentservice.getPhoto(filename).subscribe((res:any)=>{
      console.log(res)
      var file = new Blob([res], { type: 'application/pdf' })
      var fileURL = URL.createObjectURL(file);
      window.open(fileURL)
    })
  }
  

  ngOnInit(): void {
    const user = this.tokenservice.getUser();
    console.log(user)
    this.username=user.username
    let userid=user.id;
    this.studentservice.viewstudentdetailsbyid(userid).subscribe(
      (data:any)=>{
        this.isFilled=true
        console.log("is verified",data.isverified)
        if(data.isverified==true){
          this.isapproved=true;
        }
        
        console.log(data)
        this.studentservice.departmentid=data.departmentid
        this.studentservice.getDepartmentById(data.departmentid).subscribe((res:any)=>{
          this.department=res.department

        })
        this.studentservice.getBatchname(data.batchid).subscribe((res:any)=>{
          console.log(res)
          this.batchname=res.batchname
        })



        console.log(data.userid)
        this.photofilename=data.photo
        console.log(this.photofilename)
        this.studentservice.getPhoto(this.photofilename).subscribe((res:any)=>{
          console.log(res)
          
          let url = window.URL.createObjectURL(res);

        this.photo = this.sanitizer.bypassSecurityTrustUrl(url);
        })
        //fetching placement details
        if(this.isapproved==true){
          console.log("Department"+data.departmentid)
          this.studentservice.getPlacementDetailsByDepartmentid(data.departmentid).subscribe((res:any)=>{
            console.log(res)
            this.placementDetails=res
          })

        }
      },
      error=>{
        console.log(error.error.message)
        this.isFilled=false
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


    this.adminService.getAllResults().subscribe((res:any)=>{
      console.log(res)
      this.results=res
    })

  }

}
