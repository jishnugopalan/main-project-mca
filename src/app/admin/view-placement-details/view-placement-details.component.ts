import { Router } from '@angular/router';
import { AdminService } from './../../admin.service';
import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import 'datatables.net';

@Component({
  selector: 'app-view-placement-details',
  templateUrl: './view-placement-details.component.html',
  styleUrls: ['./view-placement-details.component.css']
})
export class ViewPlacementDetailsComponent implements OnInit {
  pdetails:any

  constructor(private adminService:AdminService,private router:Router) { }
  viewPlacementDetails(pid:any){
   console.log(pid)
   this.adminService.pid=pid
   this.router.navigateByUrl("/placement-details")
  }

  ngOnInit(): void {
    this.adminService.viewAllPlacementDetails().subscribe((res:any)=>{
      console.log(res)
      this.pdetails=res
    })
    
    $(document).ready( function () {
      $('#table_id').DataTable();
    });
  }

}
