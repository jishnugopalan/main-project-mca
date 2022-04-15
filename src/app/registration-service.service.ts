
import { HttpClient,} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationServiceService {
  private baseURL = "http://localhost:8080/addstudent";
 
  constructor(private http:HttpClient) { }
  
  public doRegistration(user:any):Observable<any>{
    console.log(user)
    return this.http.post(`${this.baseURL}`,user);
  }
  public getuserroles():Observable<any>{

    return this.http.get("http://localhost:8080/getuserroles");
  }
  
}
