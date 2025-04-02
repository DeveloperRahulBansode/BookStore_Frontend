import { Injectable } from '@angular/core';
import { HttpService } from '../Http/http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpService) { }

  GetAllBooks() {
    let header = {
     headers: new HttpHeaders({
      'Content-Type': 'application/json ',
    })
    }
    return this.http.GetService('http://localhost:5123/api/Book/getallbooks', header);
  }



}
