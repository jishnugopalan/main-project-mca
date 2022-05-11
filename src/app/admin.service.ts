import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

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

  public addEligbleDepartment(_elgdep:any):Observable<any>{
    return this.http.post("http://localhost:8080/add-eligible-department",_elgdep
    
    );
  }
  

}
