import { StudentServiceService } from './../../student-service.service';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-view-student-details',
  templateUrl: './view-student-details.component.html',
  styleUrls: ['./view-student-details.component.css']
})
export class ViewStudentDetailsComponent implements OnInit {


  constructor(private studentService:StudentServiceService,private sanitizer: DomSanitizer) { }
photo:any
department:any
batchname:any
profile:any
stddetails:any
student=new FormGroup({
  
  registration_number:new FormControl('',[
    Validators.required,
  Validators.maxLength(8),
Validators.minLength(8),
Validators.pattern("^\\d{0,9}$")]),

  
    sslcpercentage:new FormControl('',[
      Validators.required
     ]),
     plustwopercentage:new FormControl('',[
      Validators.required
     ]),
     ugpercentage:new FormControl('',[
      Validators.required
     ]),

  // sslc:new FormControl('',[
  //  Validators.required
  //   ]),
  //   plustwo:new FormControl('',[
  //     Validators.required
  //    ]),
  // ug:new FormControl('',[
  //   Validators.required
  //  ]),
  // idproof:new FormControl('',[
  //   Validators.required
  //   ]),
  // photo:new FormControl('',[
  //   Validators.required
  //  ]),
  //  gender:new FormControl('',[
  //    Validators.required
  //  ]),
  //  date_of_birth:new FormControl('',[
  //    Validators.required
  //  ]),
  //  batchid:new FormControl('',[
  //    Validators.required
  //  ]),
   academic_starting_year:new FormControl('',[
     Validators.required
   ]),
   academic_ending_year:new FormControl('',[
     Validators.required
   ])

})
showIDProof(idproof:any){
  console.log(idproof)
  this.studentService.getPhoto(idproof).subscribe((res:any)=>{
    console.log(res)
    
    // let url = window.URL.createObjectURL(res);
    // let doc=this.sanitizer.bypassSecurityTrustUrl(url)
    //window.open(url, '_blank');
    var file = new Blob([res], { type: 'application/pdf' })
    var fileURL = URL.createObjectURL(file);
    window.open(fileURL)
    //const docs = (window.URL || window.webkitURL).createObjectURL(res);
  // this.photo = this.sanitizer.bypassSecurityTrustUrl(url);
  // console.log(this.photo)
  })

}
verified(){
  console.log(this.studentService.userid)
  this.studentService.VerifyStudent(this.studentService.userid).subscribe((res:any)=>{
    console.log(res)
    alert("Verifed Successfully")
    this.ngOnInit()
  })
}

onSubmit(){
  this.student.value.userid=this.studentService.userid
  console.log(this.student.value)
  this.studentService.updatestudentdetails(this.student.value).subscribe((res:any)=>{
    console.log(res)
    alert("Details updated successfully")
    this.ngOnInit()
  })
}
  ngOnInit(): void {
    this.studentService.viewstudentdetailsbyid(this.studentService.userid).subscribe((res:any)=>{
      console.log(res)
      this.stddetails=res
      
      let photo=res.photo
      this.studentService.getPhoto(photo).subscribe((res:any)=>{
        console.log(res)
        
        let url = window.URL.createObjectURL(res);

      this.photo = this.sanitizer.bypassSecurityTrustUrl(url);
      console.log(this.photo)
      })

      this.studentService.getDepartmentById(res.departmentid).subscribe((res:any)=>{
        this.department=res.department
      })
      this.studentService.getBatchname(res.batchid).subscribe((res:any)=>{
        console.log(res)
        this.batchname=res.batchname
      })

      this.studentService.getUserData(this.studentService.userid).subscribe((res:any)=>{
        console.log(res)
        this.profile=res
      })
    })
  }

}
