import { TokenStorageService } from './../../token-storage.service';
import { AuthserviceService } from './../../authservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-resume',
  templateUrl: './create-resume.component.html',
  styleUrls: ['./create-resume.component.css']
})
export class CreateResumeComponent implements OnInit {

  constructor(private tokenService:TokenStorageService) { }
userid:any
skills:any=[]
addSkill(){
  const skill = (<HTMLInputElement>document.getElementById('skill')).value;
  console.log(skill)
  this.skills.push({"skills":skill})
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
  ngOnInit(): void {
    const user = this.tokenService.getUser();
    console.log(user.id)
    this.userid=user.id;
  }

}
