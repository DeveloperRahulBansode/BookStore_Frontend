import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient:HttpClient) { }
  
  PostService(reqUrl:string, reqData:any,token:boolean=false,httpOptions:any={}){
    return this.httpClient.post(reqUrl,reqData,token && httpOptions);
  }
  
    // DELETE request, no token needed for general delete operations (like removing books from inventory)
    DeleteService(url: string, httpOptions: any = {}) {
      return this.httpClient.delete(url, httpOptions);
    }
  
    // GET request, no token needed for general GET operations (like fetching books)
    GetService(url: string, httpOptions: any = {}) {
      return this.httpClient.get(url, httpOptions);
    }
  
    // PUT request, no token needed for general PUT operations (like updating book details)
    PutService(url: string, reqData: any, httpOptions: any = {}) {
      return this.httpClient.put(url, reqData, httpOptions);
    }
}
