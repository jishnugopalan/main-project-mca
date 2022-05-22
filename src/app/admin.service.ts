import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
pid:any
  constructor(private http: HttpClient) { }

  public addPlacementDetails(pds:any):Observable<any>{
    let body = new FormData();
    body.append('companyname',pds.companyname)
    body.append('ctc',pds.ctc)
    body.append('designation',pds.designation)
    body.append('description',pds.description)
    body.append('registration_link',pds.registration_link)
    body.append('registration_start_date',pds.registration_start_date)
    body.append('registration_end_date',pds.registration_end_date)
    body.append('job_description_file',pds.job_description_file)
    const myheader = new HttpHeaders().set('Content-Type', 'form-data')

    return this.http.post("http://localhost:8080/admin/add-palcement-details",body
    
    );
  }

  public updatePlacementDetails(pds:any):Observable<any>{
    let body = new FormData();
    body.append('companyname',pds.companyname)
    body.append('ctc',pds.ctc)
    body.append('designation',pds.designation)
    body.append('description',pds.description)
    body.append('registration_link',pds.registration_link)
    body.append('registration_start_date',pds.registration_start_date)
    body.append('registration_end_date',pds.registration_end_date)
    body.append('pid',pds.pid)
    const myheader = new HttpHeaders().set('Content-Type', 'form-data')

    return this.http.post("http://localhost:8080/admin/update-placement-details",body
    
    );
  }

  public updateJobDescription(pds:any):Observable<any>{
    let body = new FormData();
    body.append('pid',pds.pid)
    body.append('job_description_file',pds.job_description_file)
    const myheader = new HttpHeaders().set('Content-Type', 'form-data')

    return this.http.post("http://localhost:8080/admin/update-job-description",body
    
    );
  }

  public addEligbleDepartment(_elgdep:any):Observable<any>{
    return this.http.post("http://localhost:8080/add-eligible-department",_elgdep
    
    );
  }
  public deleteEligbleDepartment(edep:any):Observable<any>{
    let body=new FormData();
    body.append("departmentid",edep.departmentid)
    body.append("pid",edep.pid)

    console.log(edep)
    const myheader = new HttpHeaders().set('Content-Type', 'form-data')
    return this.http.post("http://localhost:8080/delete-eligible-department",body
    
    );
  }

  public viewAllPlacementDetails(){
    return this.http.get("http://localhost:8080/view-all-placementdetails"
    
    );
  }

  public viewPlacementDetailsById(_pid:any){
    return this.http.get("http://localhost:8080/view-placement-details-byid",{
      params:{
        pid:_pid
      }
    }
    
    );
  }

  public deletePlacementDetailsById(_pid:any){
    return this.http.delete("http://localhost:8080/delete-placementdetails",{
      params:{
        pid:_pid
      }
    }
    
    );
  }

  public viewEligibleDepartmentByPid(_pid:any){
    return this.http.get("http://localhost:8080/view-eligible-department-by-pid",{
      params:{
        pid:_pid
      }
    }
    
    );
  }

  public getDepartmentNotInEligibleDep(_pid:any){
    return this.http.get("http://localhost:8080/get-department-notin-eligible",{
      params:{
        pid:_pid
      }
    }
    
    );
  }

  public getUserByDepartmentid(_departmentid:any){
    return this.http.get("http://localhost:8080/admin/get-userby-department",{
      params:{
        departmentid:_departmentid
      }
    }
    
    );
  }

  public addRep(data:any){
    let body=new FormData();
    body.append("departmentid",data.departmentid)
    body.append("id",data.id)
    return this.http.post("http://localhost:8080/admin/add-department-rep",body
    
    );
  }
  public getAllDepartmentRep(){
    return this.http.get("http://localhost:8080/admin/get-all-department-rep")
    
  }
  public getDepartmentByUserid(_id:any){
    return this.http.get("http://localhost:8080/admin/get-department-by-userid",{
      params:{
        id:_id
      }
    })
    
  }
  public addDepartment(department:any):Observable<any>{
      return this.http.post("http://localhost:8080/adddepartment",department)
  }
  public addBatch(batch:any):Observable<any>{
    return this.http.post("http://localhost:8080/addbatch",batch)
}
public deleteDepartment(_departmentid:any){
  return this.http.delete("http://localhost:8080/delete-department",{
    params:{
      departmentid:_departmentid
    }
  })
}
public deleteBatch(_batchid:any){
  return this.http.delete("http://localhost:8080/delete-batch",{
    params:{
      batchid:_batchid
    }
  })
}

}
