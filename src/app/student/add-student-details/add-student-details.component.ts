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
  file1:any
  file2:any
  file3:any
  file4:any
  file5:any
  batch:any
  y:any
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
      sslcpercentage:new FormControl('',[
        Validators.required
       ]),
       plustwopercentage:new FormControl('',[
        Validators.required
       ]),
       ugpercentage:new FormControl('',[
        Validators.required
       ]),

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
     gender:new FormControl('',[
       Validators.required
     ]),
     date_of_birth:new FormControl('',[
       Validators.required
     ]),
     batchid:new FormControl('',[
       Validators.required
     ]),
     academic_starting_year:new FormControl('',[
       Validators.required
     ]),
     academic_ending_year:new FormControl('',[
       Validators.required
     ])

  })

  // private String gender;
	// private String date_of_birth;
	// private String batchid;
	// private String academic_starting_year;
	// private String academic_ending_year;
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

getBatches(departmentid:any){
  console.log("innn")
console.log(departmentid)
this.studentService.getBatchById(Number(departmentid)).subscribe((res:any)=>{
  console.log(res)
this.batch=res
})
}



  selectFile1(event: any) {
    let f=event.target.files;
    console.log(event.target.files[0].size)
    if(event.target.files[0].size>1024*1024*2){
      alert("The maximum file size to upload is 1MB ")
      this.student.controls['sslc'].setErrors({'required': true});
    }
    else{
      this.file1 = event.target.files[0];
      console.log("files added")
      console.log(this.file1)
    }
    
  }

  selectFile2(event: any) {
    let f=event.target.files;
    console.log(event.target.files[0].size)
    if(event.target.files[0].size>1024*1024*2){
      alert("The maximum file size to upload is 1MB ")
      this.student.controls['plustwo'].setErrors({'required': true});
    }
    else{
      this.file2 = event.target.files[0];
      console.log("files added")
     console.log(this.file2)
    }
    
  }
  selectFile3(event: any) {
    let f=event.target.files;
    console.log(event.target.files[0].size)
    if(event.target.files[0].size>1024*1024*2){
      alert("The maximum file size to upload is 1MB ")
      this.student.controls['ug'].setErrors({'required': true});
    }
    else{
      this.file3 = event.target.files[0];
      console.log("files added")
      console.log(this.file3)
    }
    
  }
  selectFile4(event: any) {
    let f=event.target.files;
    console.log(event.target.files[0].size)
    if(event.target.files[0].size>1024*1024*2){
      alert("The maximum file size to upload is 1MB ")
      this.student.controls['idproof'].setErrors({'required': true});
    }
    else{
      this.file4 = event.target.files[0];
      console.log("files added")
      console.log(this.file4)
     
    }
    
  }

  selectFile5(event: any) {
    let f=event.target.files;
    console.log(event.target.files[0].size)
    if(event.target.files[0].size>1024*1024*2){
      alert("The maximum file size to upload is 1MB ")
      this.student.controls['photo'].setErrors({'required': true});
    }
    else{
      this.file5 = event.target.files[0];
      console.log("files added")
      console.log(this.file5)
      
    }
    
  }

  onSubmit(){
    const user = this.tokenservice.getUser();
    console.log("in submit")
    this.student.value.userid=user.id.toString()
    this.student.value.sslc=this.file1
    this.student.value.plustwo=this.file2
    this.student.value.ug=this.file3
    this.student.value.idproof=this.file4
    this.student.value.photo=this.file5
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

    this.y=new Date().getFullYear()-18
    
  }

}
