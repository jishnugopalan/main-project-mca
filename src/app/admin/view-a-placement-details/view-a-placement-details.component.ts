import { Router } from '@angular/router';
import { StudentServiceService } from './../../student-service.service';
import { AdminService } from './../../admin.service';
import { Component, OnInit } from '@angular/core';
import {saveAs as importedSaveAs} from "file-saver";
@Component({
  selector: 'app-view-a-placement-details',
  templateUrl: './view-a-placement-details.component.html',
  styleUrls: ['./view-a-placement-details.component.css']
})
export class ViewAPlacementDetailsComponent implements OnInit {

  constructor(private adminService:AdminService,private studentservice:StudentServiceService,private router:Router) { }
pdetails:any
download(file:any){
  this.studentservice.getPhoto(file).subscribe((res:any)=>{
    console.log(res)
    importedSaveAs(res, file);
  })

}
goto(url:any){
  console.log(url)
  
 
  this.router.ngOnDestroy();
  
  window.location.href = encodeURI("https://"+url);
 
}
updatePage(){
this.router.navigateByUrl("/update-placement-details")
}
  ngOnInit(): void {
    this.adminService.viewPlacementDetailsById(this.adminService.pid).subscribe((res:any)=>{
      console.log(res)
      this.pdetails=res
      
    })
  }

}
