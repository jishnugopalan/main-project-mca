import { StudentServiceService } from './../student-service.service';
import { RegistrationServiceService } from 'src/app/registration-service.service';
import { AdminService } from 'src/app/admin.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.css']
})
export class AddDepartmentComponent implements OnInit {
error=""
error2=""
dep:any
batch:any
componentProperty:any
  constructor(private adminService:AdminService,private service:RegistrationServiceService,private studentService:StudentServiceService) { }
  form=new FormGroup({
    department:new FormControl('',[Validators.required,Validators.minLength(2),Validators.pattern("^[a-zA-Z ]*$")])
  })
  batchForm=new FormGroup({
    batchname:new FormControl('',[Validators.required,Validators.minLength(2),Validators.pattern("^[a-zA-Z ]*$")]),
    departmentid:new FormControl('',[
      Validators.required,
    ]),
  })
  get departmentid(){
    return this.batchForm.get('departmentid')
  }
  onSubmit(){
    console.log(this.form.value)
    this.adminService.addDepartment(this.form.value).subscribe((res:any)=>{
      console.log(res)
      this.error=""
      alert("Department added successfully")
    this.ngOnInit()

    },error=>{
      console.log(error)
      console.log(error.error.message)
      this.error=error.error.message
    })
  }
  onSubmit2(){
    console.log(this.batchForm.value)
    this.adminService.addBatch(this.batchForm.value).subscribe((res:any)=>{
      console.log(res)
      this.error2=""
      alert("Batch added successfully")
      
    this.ngOnInit()
    },error=>{
      this.error2=error.error.message
      console.log(error.error.message)
    })
  }
  
  delete(_departmentid:any){
    console.log(_departmentid)
    this.adminService.deleteDepartment(_departmentid).subscribe((res:any)=>{
      console.log(res)
      alert("Department deleted successfully")

    this.ngOnInit()

    })
  }
  deleteBatch(_batchid:any){
    console.log(_batchid)
    this.adminService.deleteBatch(_batchid).subscribe((res:any)=>{
      console.log(res)
      this.batch=null
      alert("Batch deleted successfully")

    this.ngOnInit()
    })
  }
  getBatch(deviceValue:any){
    
    console.log(deviceValue)
    this.studentService.getBatchById(deviceValue).subscribe((res:any)=>{
      console.log(res)
      this.batch=res
    })
  }
  ngOnInit(): void {
    this.service.getDepartment().subscribe((res:any)=>{
      console.log(res)
      this.dep=res
    })
  
  }

}
