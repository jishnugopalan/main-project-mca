import { Router } from '@angular/router';
import { AdminService } from './../../admin.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { RegistrationServiceService } from 'src/app/registration-service.service';

@Component({
  selector: 'app-add-placement-details',
  templateUrl: './add-placement-details.component.html',
  styleUrls: ['./add-placement-details.component.css']
})
export class AddPlacementDetailsComponent implements OnInit {
  file1:any
  dep:any
  elg_dep:any=[]
  min_date:any
  constructor(private service:RegistrationServiceService,private adminServic:AdminService,private router:Router) { }
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
    job_description_file:new FormControl('',[
      Validators.required,
    ]),
    


  })

  getMinDate(d:any){
    console.log(d)
    this.min_date=d
  }
  selectFile1(event: any) {
    let f=event.target.files;
    console.log(event.target.files[0].size)
    if(event.target.files[0].size>1024*1024*2){
      alert("The maximum file size to upload is 1MB ")
      this.form.controls['job_description_file'].setErrors({'required': true});
      
    }
    else{
      this.file1 = event.target.files[0];
      console.log("files added")
      console.log(this.file1)
      console.log(this.form.value)
    }
    
  }
  submit(){
   
    this.form.value.job_description_file=this.file1
    console.log(this.form.value)
    if(this.elg_dep.length!=0){
      this.adminServic.addPlacementDetails(this.form.value).subscribe((res:any)=>{
        console.log(res)
        console.log(res.pid)
        let pid=res.pid
        for(let i=0;i<this.elg_dep.length;i++){
          this.adminServic.addEligbleDepartment({"pid":pid,"departmentid":this.elg_dep[i]}).subscribe((r:any)=>{
            console.log(r)
           
          })
        }
        this.router.navigateByUrl("/view-placement-details")
      })
      

    }
    else{
      alert("Please select a department")
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
    this.min_date=new Date().toISOString().slice(0, 10)
    this.service.getDepartment().subscribe((res:any)=>{
      console.log(res)
      this.dep=res
    })
  }

}
