import { StudentServiceService } from './../../student-service.service';
import { AdminService } from 'src/app/admin.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-results',
  templateUrl: './add-results.component.html',
  styleUrls: ['./add-results.component.css']
})
export class AddResultsComponent implements OnInit {
file1:any
results:any=[]
  resultForm=new FormGroup({
    result_subject:new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(100)]),
    result_description:new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(255)]),
    result_file:new FormControl('',[Validators.required])
  })

  constructor(private adminService:AdminService,private studentService:StudentServiceService) { }
  selectFile1(event: any) {
    let f=event.target.files;
    console.log(event.target.files[0].size)
    if(event.target.files[0].size>1024*1024*2){
      alert("The maximum file size to upload is 1MB ")
      this.resultForm.controls['result_file'].setErrors({'required': true});
    }
    else{
      this.file1 = event.target.files[0];
      console.log("files added")
      console.log(this.file1)
    }
    
  }
  onSubmit(){
    this.resultForm.value.result_file=this.file1
    console.log(this.resultForm.value)
    this.adminService.addResults(this.resultForm.value).subscribe((res:any)=>{
      console.log(res)
      alert("Result added successfully")
      this.ngOnInit()
    })
  }
  deleteResult(resultid:any){

    this.adminService.deleteResult(resultid).subscribe((res:any)=>{
      console.log(res)
      alert(res.message)
      this.ngOnInit()
    })
  }
  showResult(filename:any){
    console.log(filename)
  
    this.studentService.getPhoto(filename).subscribe((res:any)=>{
      console.log(res)
      var file = new Blob([res], { type: 'application/pdf' })
      var fileURL = URL.createObjectURL(file);
      window.open(fileURL)
    })
  }
 

  ngOnInit(): void {
    this.resultForm.reset()
    this.adminService.getAllResults().subscribe((res:any)=>{
      console.log(res)
      this.results=res
    })
  }

}
