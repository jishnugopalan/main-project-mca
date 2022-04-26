import { StudentServiceService } from './../../student-service.service';
import { RegistrationServiceService } from './../../registration-service.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/token-storage.service';

@Component({
  selector: 'app-add-student-details',
  templateUrl: './add-student-details.component.html',
  styleUrls: ['./add-student-details.component.css']
})
export class AddStudentDetailsComponent implements OnInit {
  
  dep:any
  countries:any
  states:any
  districts:any
  constructor(private service:RegistrationServiceService,private tokenservice:TokenStorageService,private studentService:StudentServiceService) { }
  
  student=new FormGroup({
    departmentid:new FormControl('',[
      Validators.required,
    ]),
    registration_number:new FormControl('',[
      Validators.required,
    Validators.maxLength(8),
  Validators.minLength(8),
Validators.pattern("^\\d{0,9}$")]),
  
    house:new FormControl('',[
      Validators.required,
    Validators.maxLength(65),
  Validators.minLength(2)]),
    place:new FormControl('',[
      Validators.required,
    Validators.maxLength(65),
  Validators.minLength(2)]),
    district:new FormControl('',[
      Validators.required]),
    state:new FormControl('',[
      Validators.required]),
    pincode:new FormControl('',[
      Validators.required,
    Validators.max(999999),
  Validators.min(100000)]),
    country:new FormControl('',[
      Validators.required]),
    sslc:new FormControl('',[
     Validators.required
      ]),
      plustwo:new FormControl('',[
        Validators.required
       ]),
    ug:new FormControl('',[
      Validators.required
     ]),
    idproof:new FormControl('',[
      Validators.required
      ]),
    photo:new FormControl('',[
      Validators.required
     ]),
     sslcpercentage:new FormControl('',[
      Validators.required
     ]),
     plustwopercentage:new FormControl('',[
      Validators.required
     ]),
     ugpercentage:new FormControl('',[
      Validators.required
     ]),
    

  })
  get registration_number(){
    return this.student.get('registration_number')
  }
  get departmentid(){
    return this.student.get('departmentid')
  }
  get house(){
    return this.student.get('house')
  }
  get place(){
    return this.student.get('place')
  }
  get district(){
    return this.student.get('district')
  }
  get sate(){
    return this.student.get('state')
  }
  get country(){
    return this.student.get('country')
  }
  get pincode(){
    return this.student.get('pincode')
  }

public getStates(c:any){
  console.log(c)
  this.studentService.getCountries().subscribe((res:any)=>{
    //console.log(res.data)
    console.log(res.data.length)
    //console.log(res.data[0].states)
    for(let i=0;i<res.data.length;i++){
      if(res.data[i].name==c){
        this.states=res.data[i].states
        console.log(this.states)
      }
    }
  })
}

public getDistrict(c:any,s:any){
  console.log(s)
  console.log(c)
  this.studentService.getDistrict(c,s).subscribe((res:any)=>{
    console.log(res)
    this.districts=res.data
  })

}




  selectFile1(event: any) {
    let f=event.target.files;
    console.log(event.target.files[0].size)
    if(event.target.files[0].size>1024*1024*2){
      alert("The maximum file size to upload is 1MB ")
      
    }
    else{
      this.student.value.sslc = event.target.files[0];
      console.log("files added")
      console.log(this.student.value)
      console.log(this.student.value)
      this.student.controls['sslc'].setErrors(null)
    }
    
  }

  selectFile2(event: any) {
    let f=event.target.files;
    console.log(event.target.files[0].size)
    if(event.target.files[0].size>1024*1024*2){
      alert("The maximum file size to upload is 1MB ")
    }
    else{
      this.student.value.plustwo = event.target.files[0];
      console.log("files added")
      console.log(this.student.value)
      this.student.controls['plustwo'].setErrors(null)
    }
    
  }
  selectFile3(event: any) {
    let f=event.target.files;
    console.log(event.target.files[0].size)
    if(event.target.files[0].size>1024*1024*2){
      alert("The maximum file size to upload is 1MB ")
    }
    else{
      this.student.value.ug = event.target.files[0];
      console.log("files added")
      console.log(this.student.value)
      this.student.controls['ug'].setErrors(null)
    }
    
  }
  selectFile4(event: any) {
    let f=event.target.files;
    console.log(event.target.files[0].size)
    if(event.target.files[0].size>1024*1024*2){
      alert("The maximum file size to upload is 1MB ")
    }
    else{
      this.student.value.idproof = event.target.files[0];
      console.log("files added")
      console.log(this.student.value)
      this.student.controls['idproof'].setErrors(null)
    }
    
  }

  selectFile5(event: any) {
    let f=event.target.files;
    console.log(event.target.files[0].size)
    if(event.target.files[0].size>1024*1024*2){
      alert("The maximum file size to upload is 1MB ")
    }
    else{
      this.student.value.photo = event.target.files[0];
      console.log("files added")
      console.log(this.student.value)
      this.student.controls['photo'].setErrors(null)
    }
    
  }

  onSubmit(){
    const user = this.tokenservice.getUser();
    console.log("in submit")
    this.student.value.userid=user.id.toString()
    console.log(this.student.value)
   
    //this.student.value.userid,this.student.value.departmentid,this.student.value.registartion_number,this.student.value.house,this.student.value.place,this.student.value.district,
    //this.student.value.state,this.student.value.country,this.student.value.pincode,this.student.value.sslc,this.student.value.plustwo,this.student.value.ug,this.student.value.idproof,this.student.value.photo
    this.studentService.addstudentdetails(this.student.value).subscribe((res:any)=>{
      console.log(res)
      window.location.reload();

    })
  }

  ngOnInit(): void {
    this.service.getDepartment().subscribe((res:any)=>{
      console.log(res)
      this.dep=res
    })
    

    this.studentService.getCountries().subscribe((res:any)=>{
      console.log(res.data)
      this.countries=res.data
    })
    
  }

}
