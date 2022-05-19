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
  constructor(private adminService:AdminService,private service:RegistrationServiceService) { }
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
    },error=>{
      this.error2=error.error.message
      console.log(error.error.message)
    })
  }
  ngOnInit(): void {
    this.service.getDepartment().subscribe((res:any)=>{
      console.log(res)
      this.dep=res
    })
  }

}
