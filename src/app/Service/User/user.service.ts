import { Injectable } from '@angular/core';
import { HttpService } from '../Http/http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  token:any;
  constructor(private http: HttpService) {
    this.token=localStorage.getItem('token');

   }

  login(reqData: any) {
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.PostService('http://localhost:5123/api/User/login', reqData, true, header);
  }
  register(reqData: any) {
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.PostService('http://localhost:5123/api/User/register', reqData, true, header);
  }


}
 