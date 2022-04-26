import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {

  constructor(private http:HttpClient) { }
  public viewstudentdetailsbyid(_userid:any):Observable<any>{

    return this.http.get("http://localhost:8080/viewstudentdetailsbyid",{
      params:{
        userid:_userid
      }
    });
  }

  public addstudentdetails(userDetails:any):Observable<any>{

    //_userid:any,_departmentid:any,_registration_number:any,_house:any,_place:any,_district:any,_state:any,_country:any,_pincode:any,_sslc:any,_plustwo:any,_ug:any,_idproof:any,_photo:any
  //  console.log(_userid)
  let params = new HttpParams();
    params=params.set('userid',userDetails.userid)
  //  params=params.append('departmentid',_departmentid)
  //  params=params.append('registartion_number',_registration_number)
  //  params=params.append('house',_house)
  //  params=params.append('place',_place)
  //  params=params.append('district',_district)
  //  params=params.append('state',_state)
  //  params=params.append('country',_country)
  //  params=params.append('pincode',_pincode)
  //  params=params.append('sslc',_sslc)
  //  params=params.append('plustwo',_plustwo)
  //  params=params.append('ug',_ug)
  //  params=params.append('idproof',_idproof)

  //  params=params.append('photo',_photo)

  //   console.log(params)
  //  const httpParams=new HttpParams({
  //    fromObject:{
      
  //     'departmentid':userDetails.departmentid,
  //     'registration_number':userDetails.registration_number,
  //     'house':userDetails.house,
  //     'place':userDetails.place,
  //     'district':userDetails.district,
  //     'state':userDetails.state,
  //     'country':userDetails.country,
  //     'pincode':userDetails.pincode,
  //     'sslc':userDetails.sslc,
  //     'plustwo':userDetails.plustwo,
  //     'ug':userDetails.ug,
  //     'idproof':userDetails.idproof
  //    }
  //  })
  //  httpParams.set('userid',userDetails.userid)

  //  console.log(httpParams)
  //  const url = `http://localhost:8080/addstudentdetails`;
  //  let input = new FormData();
  //  input.append('url', userDetails);
  //  console.log(input)   
  //  return this.http.post(url, input).pipe(map((resp: any) => resp));
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




  const myheader = new HttpHeaders().set('Content-Type', 'form-data')

    return this.http.post("http://localhost:8080/addstudentdetails",body
    
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
}
