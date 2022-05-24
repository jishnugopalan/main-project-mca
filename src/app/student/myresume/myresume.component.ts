import { StudentServiceService } from './../../student-service.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TokenStorageService } from 'src/app/token-storage.service';
import { DomSanitizer } from '@angular/platform-browser';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-myresume',
  templateUrl: './myresume.component.html',
  styleUrls: ['./myresume.component.css']
})
export class MyresumeComponent implements OnInit {
  photofilename=""
  photo:any
  fullname:any
  email:any
  phone:any
  department=""
  batchname=""
  student:any
  resume:any
  
 
  constructor(private studentService:StudentServiceService,private tokenservice:TokenStorageService,private sanitizer: DomSanitizer) { }
  
  
  exportAsPDF()
  {
    //const doc = new jspdf.jsPDF();
      let data = <HTMLCanvasElement> document.getElementById("resume"); 
      html2canvas(data).then(canvas => {
      const contentDataURL = canvas.toDataURL('image/png')  // 'image/jpeg' for lower quality output.
      let pdf = new jspdf.jsPDF('l', 'cm', 'a4'); //Generates PDF in landscape mode
      // let pdf = new jspdf();// Generates PDF in portrait mode
      pdf.addImage(contentDataURL, 'PNG', 0, 0, 29.7, 21.0);  
      pdf.save('Filename.pdf');   
    }); 
  }
  ngOnInit(): void {
    const user = this.tokenservice.getUser();
    console.log(user)
    let userid=user.id;
    this.studentService.getUser(user.username).subscribe((res:any)=>{
      console.log(res)
      this.fullname=res.fullname
      this.email=res.username
      this.phone=res.phone
    })
    //get resume details
    this.studentService.getResume(userid).subscribe((res:any)=>{
      console.log("My resume")
      console.log(res)
      this.resume=res
    })
    //

    this.studentService.viewstudentdetailsbyid(userid).subscribe(
      (data:any)=>{
        

        console.log(data)
        this.student=data
        this.studentService.departmentid=data.departmentid
        this.studentService.getDepartmentById(data.departmentid).subscribe((res:any)=>{
          this.department=res.department

        })
        this.studentService.getBatchname(data.batchid).subscribe((res:any)=>{
          console.log(res)
          this.batchname=res.batchname
        })



        console.log(data.userid)
        this.photofilename=data.photo
        console.log(this.photofilename)
        this.studentService.getPhoto(this.photofilename).subscribe((res:any)=>{
          console.log(res)
          
          let url = window.URL.createObjectURL(res);

        this.photo = this.sanitizer.bypassSecurityTrustUrl(url);
        })
        //fetching placement details

        
      },
      error=>{
        console.log(error.error.message)
        
      }
    )
  }

}
