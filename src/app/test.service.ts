import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'

    })
  }

  constructor(private http: HttpClient) { }

  createUsers():Observable<any>{
    return this.http.get("http://localhost:3000/createUsers",{responseType: 'text'});
  }

  login(obj:{}):Observable<any>{
    return this.http.post("http://localhost:3000/app/login",obj,this.httpOptions);
  }
  login1(): boolean {
    
    return (localStorage.getItem('user') !== null) ;
  }
  getAuthorizationToken():string|null {

    return localStorage.getItem('token');
  }
  getBikes():Observable<any>{
    return this.http.get("http://localhost:3000/public/publicBikes",this.httpOptions)
  }
  reserveBikes(array:any[]):Observable<any>{
    return this.http.post("http://localhost:3000/private/Guest/requestBike",{"type":array},this.httpOptions)
  }
  reservedBikes():Observable<any>{
    return this.http.get("http://localhost:3000/private/Admin/getAllReservation",this.httpOptions)
  }
  activateBikes(type:{}):Observable<any>{
    return this.http.post("http://localhost:3000/private/Admin/changeRented",type,this.httpOptions)
  }
  pastReservations():Observable<any>{
    return this.http.get("http://localhost:3000/private/Guest/listOrders",this.httpOptions)
  }
  filterByType(bike:any):Observable<any>{
    return this.http.get("http://localhost:3000/public//filerBikesType/" + bike,this.httpOptions);
  }
  filterByPower(power:any):Observable<any>{
    return this.http.get("http://localhost:3000/public//filerBikesPower/"+power,this.httpOptions)
  }
}
