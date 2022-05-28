import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {
  departmentid:any
  userid:any
  complaintid:any

  constructor(private http:HttpClient) { }
  public viewstudentdetailsbyid(_userid:any):Observable<any>{

    return this.http.get("http://localhost:8080/viewstudentdetailsbyid",{
      params:{
        userid:_userid
      }
    });
  }

  public addstudentdetails(userDetails:any):Observable<any>{

  let params = new HttpParams();
    params=params.set('userid',userDetails.userid)

let body = new FormData();
body.append('userid', userDetails.userid);
body.append('departmentid',userDetails.departmentid,);
body.append('registration_number',userDetails.registration_number,);
body.append( 'house',userDetails.house,);
body.append( 'place',userDetails.place,);
body.append('district',userDetails.district,);
body.append('state',userDetails.state,);
body.append('country',userDetails.country,);
body.append('pincode',userDetails.pincode,);
body.append('sslc',userDetails.sslc,);
body.append('plustwo',userDetails.plustwo,);
body.append('ug',userDetails.ug,);
body.append('idproof',userDetails.idproof);
body.append('photo',userDetails.photo)
body.append('sslcpercentage',userDetails.sslcpercentage)
body.append('plustwopercentage',userDetails.plustwopercentage)
body.append('ugpercentage',userDetails.ugpercentage)
body.append('gender',userDetails.gender)
body.append('date_of_birth',userDetails.date_of_birth)
body.append('batchid',userDetails.batchid)
body.append('academic_starting_year',userDetails.academic_starting_year)
body.append('academic_ending_year',userDetails.academic_ending_year)


  const myheader = new HttpHeaders().set('Content-Type', 'form-data')

    return this.http.post("http://localhost:8080/addstudentdetails",body
    
    );
  }

  public updatestudentdetails(userDetails:any):Observable<any>{

   
  let body = new FormData();
  body.append('userid', userDetails.userid);
  body.append('registration_number',userDetails.registration_number,);
  body.append('sslcpercentage',userDetails.sslcpercentage)
  body.append('plustwopercentage',userDetails.plustwopercentage)
  body.append('ugpercentage',userDetails.ugpercentage)
  body.append('academic_starting_year',userDetails.academic_starting_year)
  body.append('academic_ending_year',userDetails.academic_ending_year)
  
  
    const myheader = new HttpHeaders().set('Content-Type', 'form-data')
  
      return this.http.post("http://localhost:8080/update-student-details",body
      
      );
    }

  public getCountries(){
    return this.http.get("https://countriesnow.space/api/v0.1/countries/states")
  }
  public getDistrict(country:any,state:any){

    return this.http.post("https://countriesnow.space/api/v0.1/countries/state/cities",{
      "country":country,
      "state":state
    })

  }

  public getPhoto(_filename:any){
    return this.http.get("http://localhost:8080/getphoto?filename="+_filename, { responseType: 'blob' });
  }
  public getUser(_email:any){

    return this.http.get("http://localhost:8080/userdata",{
      params:{
        email:_email
      }
    });

  }

  public getDepartmentById(_departmentid:any){
    return this.http.get("http://localhost:8080/getdepartmentbyid",{
      params:{
        departmentid:_departmentid
      }
    })
  }
  public getBatchById(_departmentid:number){

    return this.http.get("http://localhost:8080/viewbydepartmentid",{
      params:{
        departmentid:_departmentid
      }
    })
  }
  public getBatchname(_batchid:any){
    return this.http.get("http://localhost:8080/viewbybatchid",{
      params:{
        batchid:_batchid
      }
    })

  }

  public getPlacementDetailsByDepartmentid(_departmentid:any){
    return this.http.get("http://localhost:8080/get-placementdetails-by-department",{
      params:{
        departmentid:_departmentid
      }
    })
  }
  public getAllStudentDetailsByDepartmentid(_departmentid:any){
    return this.http.get("http://localhost:8080/get-all-students-by-departmentid",{
      params:{
        departmentid:_departmentid
      }
    })
  }
  public getUserData(_userid:any){
    return this.http.get("http://localhost:8080/get-user-data",{
      params:{
        id:_userid
      }
    })
  }
  public VerifyStudent(_userid:any){
    let body = new FormData();
    body.append("userid",_userid)
    return this.http.post("http://localhost:8080/verify-student",body)
  }
  public createResume(resume:any):Observable<any>{
     return this.http.post("http://localhost:8080/add-resume",resume)
  }
  public getResume(_userid:any){
    return this.http.get("http://localhost:8080/get-resume-details",{
      params:{
        userid:_userid
      }
    })
 }
 public addComplaint(complaint:any):Observable<any>{
 return this.http.post("http://localhost:8080/add-complaint",complaint)
 }
 public getComplaintByUserid(_userid:any){
  return this.http.get("http://localhost:8080/get-complaints",{
    params:{
      userid:_userid
    }
  })
 }
 public getComplaintByDepartmentid(_departmentid:any){
  return this.http.get("http://localhost:8080/get-complaints-by-departmentid",{
    params:{
      departmentid:_departmentid
    }
  })
 }
 public getComplaintById(_complaintid:any){
  return this.http.get("http://localhost:8080/get-complaint-by-id",{
    params:{
      complaintid:_complaintid
    }
  })
 }
 public sendComplaintReply(reply:any):Observable<any>{
  return this.http.post("http://localhost:8080/add-complaint-replay",reply)
 }
 public getComplaintReplyById(_complaintid:any){
  return this.http.get("http://localhost:8080/get-complaint-reply",{
    params:{
      complaintid:_complaintid
    }
  })
 }
 public sendComplaintToAdmin(complaint:any):Observable<any>{
  return this.http.post("http://localhost:8080/add-admin-to-complaint",complaint)
 }
 public updateProfile(user:any):Observable<any>{

   
  let body = new FormData();
  body.append('id', user.id);
  body.append('fullname', user.fullname);
  body.append('username', user.username);
  body.append('phone', user.phone);

    const myheader = new HttpHeaders().set('Content-Type', 'form-data')
  
      return this.http.post("http://localhost:8080/api/auth/update-profile",body
      
      );
    }
  public updatePassword(password:any):Observable<any>{

  
    let body = new FormData();
    body.append('id', password.id);
    body.append('password', password.password);
    
      const myheader = new HttpHeaders().set('Content-Type', 'form-data')
    
        return this.http.post("http://localhost:8080/api/auth/update-password",body
        
        );
      }
  public verifyEmail(_email:any):Observable<any>{
    return this.http.get("http://localhost:8080/api/auth/verify-email",{
      params:{
        email:_email.email
      }
    })
  }
  public sendOtp(_email:any){
    let body = new FormData();
    body.append('email', _email);
    return this.http.post("http://localhost:8080/api/auth/send-otp",body)
  }
  public verifyOtp(_otp:any){
    return this.http.get("http://localhost:8080/api/auth/validate-otp",{
      params:{
        email:_otp.email,
        otp:_otp.otp
      }
    })
  }
  public getUnknownUser(_email:any){

    return this.http.get("http://localhost:8080/api/auth/get-unknown-user",{
      params:{
        email:_email
      }
    });

  }
         


}
