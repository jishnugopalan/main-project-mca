import { Router } from '@angular/router';
import { AdminService } from 'src/app/admin.service';
import { RegistrationServiceService } from './../../registration-service.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-rep',
  templateUrl: './add-rep.component.html',
  styleUrls: ['./add-rep.component.css']
})
export class AddRepComponent implements OnInit {
dep:any
department=""
users:any=[]
rep:any=[]
data:any=[]
deps=""
  constructor(private service:RegistrationServiceService,private adminService:AdminService,private router:Router) { }
  form=new FormGroup({
    departmentid:new FormControl('',[
      Validators.required
    ]),
    id:new FormControl('',[
      Validators.required
    ]),

  })
  addRep(){
    console.log(this.form.value)
    this.adminService.addRep(this.form.value).subscribe((res:any)=>{
      console.log(res)
      alert("Representitive added successfully")
      this.router.navigateByUrl("/admin-home")

    })
  }
  getStudents(){
  console.log(this.form.value.departmentid)
  this.adminService.getUserByDepartmentid(this.form.value.departmentid).subscribe((res:any)=>{
    console.log(res)
    let x=[]
    for(let i=0;i<res.length;i++){
      x.push({"id":res[i][0],"fullname":res[i][1]})
    }
    this.users=x
    console.log(this.users)
  })
  }
  ngOnInit(): void {
    this.service.getDepartment().subscribe((res:any)=>{
      console.log(res)
      this.dep=res
      
    })
    this.adminService.getAllDepartmentRep().subscribe((res:any)=>{
      console.log(res)
      let x=[]
      for(let i=0;i<res.length;i++){
        x.push({"id":res[i][0],"fullname":res[i][1],"email":res[i][4],"phone":res[i][3]})

      }
      this.rep=x
      console.log(this.rep)
      for(let i=0;i<this.rep.length;i++){
        let y=[]
        this.adminService.getDepartmentByUserid(this.rep[i].id).subscribe((res:any)=>{
          console.log("Departments")
          console.log(res[0])
          this.rep[i].department=res[0]
          
        //this.data.push({"fullname":this.rep[i].fullname,"department":res[0]})
         
        })
        
        
      }
     console.log(this.rep)
    })
  }

}
