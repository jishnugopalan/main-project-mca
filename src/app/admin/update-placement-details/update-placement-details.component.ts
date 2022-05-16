import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/admin.service';
import { RegistrationServiceService } from 'src/app/registration-service.service';

@Component({
  selector: 'app-update-placement-details',
  templateUrl: './update-placement-details.component.html',
  styleUrls: ['./update-placement-details.component.css']
})
export class UpdatePlacementDetailsComponent implements OnInit {

  constructor(private service:RegistrationServiceService,private adminServic:AdminService,private router:Router,private adminService:AdminService) { }
  file1:any
  dep:any=[]
  elg_dep:any=[]
  min_date:any
  pdetails:any
  edep:any=[]
  isfile:any
  form=new FormGroup({
    companyname:new FormControl('',[
      Validators.required,
      Validators.minLength(2)
    ]),
    designation:new FormControl('',[
      Validators.required,
      Validators.minLength(2)
    ]),
    ctc:new FormControl('',[
      Validators.required,
      Validators.pattern('^[-+]?[0-9]*\.?[0-9]+$'),
      Validators.maxLength(5)
    ]),
    description:new FormControl('',[
      Validators.required,
      Validators.minLength(10)
    ]),
    registration_link:new FormControl('',[
      Validators.required,
      Validators.pattern('^(http[s]?:\\/\\/(www\\.)?|ftp:\\/\\/(www\\.)?|www\\.){1}([0-9A-Za-z-\\.@:%_\+~#=]+)+((\\.[a-zA-Z]{2,3})+)(/(.)*)?(\\?(.)*)?')
     
    ]),
    registration_start_date:new FormControl('',[
      Validators.required,
    ]),
    registration_end_date:new FormControl('',[
      Validators.required,
    ]),
    // job_description_file:new FormControl('',[
    //   Validators.required,
    // ]),
    


  })

  delete(departmentid:any){
  console.log(departmentid)
  this.adminService.deleteEligbleDepartment({"departmentid":departmentid,"pid":this.adminService.pid}).subscribe((res:any)=>{
    console.log(res)
    alert("Departments deleted successfully")
    this.router.navigateByUrl("/view-placement-details")
  })
  }
  getMinDate(d:any){
    console.log(d)
    this.min_date=d
  }
  selectFile1(event: any) {
    let f=event.target.files;
    console.log(event.target.files[0].size)
    if(event.target.files[0].size>1024*1024*2){
      alert("The maximum file size to upload is 1MB ")
      this.isfile="The maximum file size to upload is 1MB"
      
    }
    else{
      this.file1 = event.target.files[0];
      console.log("files added")
      this.isfile=""
      console.log(this.file1)
      console.log(this.form.value)
    }
    
  }
  upload(){
    console.log(this.file1)
    this.adminService.updateJobDescription({"pid":this.adminService.pid,"job_description_file":this.file1}).subscribe((res:any)=>{
      console.log(res)
      alert("Uploaded successfully")
      this.router.navigateByUrl("/view-placement-details")
    },error=>{
      console.log(error)
      alert("Uploading error")
    })
  }
  submit(){
   
    this.form.value.pid=this.adminService.pid
    console.log(this.form.value)
    this.adminService.updatePlacementDetails(this.form.value).subscribe((res:any)=>{
      console.log(res)
      alert("Placement Details Updated Successfully")
      this.router.navigateByUrl("/view-placement-details")
    })
   

  }
  addEligibleDep(){
    if(this.elg_dep.length==0){
      alert("Please select a department")
    }
    else{
      for(let i=0;i<this.elg_dep.length;i++){
        this.adminServic.addEligbleDepartment({"pid":this.adminService.pid,"departmentid":this.elg_dep[i]}).subscribe((r:any)=>{
          console.log(r)
         
        })
      }
      alert("Departments added successfully")
    this.router.navigateByUrl("/view-placement-details")
    }
   
    
  }
  getDeps(event: any){
    console.log(event)
    if(event.target.checked==true){
      this.elg_dep.push(event.target.id)
    }
    if(event.target.checked==false){
      //this.elg_dep.push(event.target.id)
      let v=this.elg_dep.indexOf(event.target.id);
      this.elg_dep.splice(v,1)
    }
    console.log(this.elg_dep)
  }

  ngOnInit(): void {
    this.adminService.viewEligibleDepartmentByPid(this.adminService.pid).subscribe((res:any)=>{
      console.log(res)
      this.edep=res
    })
    this.min_date=new Date().toISOString().slice(0, 10)
    this.adminService.getDepartmentNotInEligibleDep(this.adminService.pid).subscribe((res:any)=>{
      console.log("Not in eligible"+res)
      console.log(res)
      console.log(res[0][0])
      console.log(res[0][1])
      let x=[]
      for(let i=0;i<res.length;i++){
        
        x.push({"departmentid":res[i][0],"department":res[i][1]})

      }
      console.log(res)
      this.dep=x
    })
    this.adminService.viewPlacementDetailsById(this.adminService.pid).subscribe((res:any)=>{
      console.log(res)
      this.pdetails=res
      this.form.value.companyname=res.companyname
    })
   
  }

}
