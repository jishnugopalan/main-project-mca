import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentServiceService } from './../../student-service.service';
import { TokenStorageService } from './../../token-storage.service';
import { AuthserviceService } from './../../authservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-resume',
  templateUrl: './create-resume.component.html',
  styleUrls: ['./create-resume.component.css']
})
export class CreateResumeComponent implements OnInit {

  constructor(private tokenService:TokenStorageService,private studentService:StudentServiceService,private router:Router) { }
userid:any
skills:any=[]
projects:any=[]
certifications:any=[]
experiences:any=[]
hobbies:any=[]
resume:any={}
summary=""
education:any=[]
educationForm=new FormGroup({
  school_or_college:new FormControl('',[Validators.required]),
  stream:new FormControl('',[Validators.required]),
  year_start:new FormControl('',[Validators.required]),
  year_end:new FormControl('',[Validators.required]),
  score:new FormControl('',[Validators.required])
})

addEducation(){
console.log(this.educationForm.value)
this.education.push(this.educationForm.value)
console.log(this.education)
}
deleteEducation(index:any){
  console.log(index)
  this.education.splice(index, 1)

}
getCount(){
  const summary = (<HTMLInputElement>document.getElementById('summary')).value;
    console.log(summary.length)
    if(summary.length>1000){
      alert("Maximum number of characters is 10000")
    }
}

addSummary(){
  if(this.summary==""){
    
   
    const summary = (<HTMLInputElement>document.getElementById('summary')).value;
    console.log(summary.length)
    if(summary.length>1000){
      alert("Maximum number of characters is 10000")
    }else{
      console.log(summary)
      this.summary=summary
    }
    
  }

  

}
addSkill(){
  const skill = (<HTMLInputElement>document.getElementById('skill')).value;
  console.log(skill)
  this.skills.push({"skill":skill})
  console.log(this.skills)
}
deleteSkill(item:any){
  console.log(item)
  let index
  for(let i=0;i<this.skills.length;i++){
    console.log(this.skills[i].skills==item)
    if(this.skills[i].skills==item){
      index=i
      this.skills.splice(index, 1)
      break
    }
    
  }
  console.log(index)
  
}
addProject(){
  const project = (<HTMLInputElement>document.getElementById('project')).value;
  console.log(project)
  this.projects.push({"project":project})
  console.log(this.projects)
}
deleteProjects(item:any){
  console.log(item)
  let index
  for(let i=0;i<this.projects.length;i++){
    console.log(this.projects[i].projects==item)
    if(this.projects[i].projects==item){
      index=i
      this.projects.splice(index, 1)
      break
    }
    
  }
  console.log(index)
}
addCertificate(){
  const certificate = (<HTMLInputElement>document.getElementById('certificate')).value;
  console.log(certificate)
  this.certifications.push({"certificate":certificate})
  console.log(this.certifications)
}
deleteCertificate(item:any){

  console.log(item)
  let index
  for(let i=0;i<this.certifications.length;i++){
    console.log(this.certifications[i].certificate==item)
    if(this.certifications[i].certificate==item){
      index=i
      this.certifications.splice(index, 1)
      break
    }
    
  }
  console.log(index)
}
addExperience(){

  const experience = (<HTMLInputElement>document.getElementById('experience')).value;
  console.log(experience)
  this.experiences.push({"experience":experience})
  console.log(this.experiences)
}
deleteExperience(item:any){
  console.log(item)
  let index
  for(let i=0;i<this.experiences.length;i++){
    console.log(this.experiences[i].experience==item)
    if(this.experiences[i].experience==item){
      index=i
      this.experiences.splice(index, 1)
      break
    }
    
  }
  console.log(index)

}
addHobbies(){

  const hobby = (<HTMLInputElement>document.getElementById('hobbies')).value;
  console.log(hobby)
  this.hobbies.push({"hobby":hobby})
  console.log(this.hobbies)
}
deleteHobbies(item:any){
  console.log(item)
  let index
  for(let i=0;i<this.hobbies.length;i++){
    console.log(this.hobbies[i].hobby==item)
    if(this.hobbies[i].hobby==item){
      index=i
      this.hobbies.splice(index, 1)
      break
    }
    
  }
  console.log(index)

}
createResume(){
  this.resume.userid=this.userid
  if(this.summary==""){
    alert("Summary is required")
  }
  else{
    if(this.education.length!=0){

      this.resume.summary={"summary":this.summary}
      this.resume.education=this.education
  if(this.skills.length!=0){
    this.resume.skills=this.skills
  }
  if(this.projects.length!=0){
    this.resume.projects=this.projects
  }
  if(this.certifications.length!=0){
    this.resume.certifications=this.certifications
  }
  if(this.experiences.length!=0){
    this.resume.experiences=this.experiences
  }
  if(this.hobbies.length!=0){
    this.resume.hobbies=this.hobbies
  }
  console.log(this.resume)
  this.studentService.createResume(this.resume).subscribe((res:any)=>{
    console.log(res)
    this.router.navigateByUrl("/myresume")
  })

    }
    else{
      alert("Please add education details")
    }
    
}
}
  ngOnInit(): void {
    const user = this.tokenService.getUser();
    console.log(user.id)
    this.userid=user.id;
    this.studentService.getResume(this.userid).subscribe((res:any)=>{
      console.log(res)
      this.router.navigateByUrl("/myresume")
    })
  }

}
