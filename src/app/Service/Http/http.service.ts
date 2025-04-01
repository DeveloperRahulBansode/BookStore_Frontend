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
  PostServiceToken(url: string, reqData: any, token: boolean = true, httpOptions: any = {}) {
    return this.httpClient.post(url, reqData, token ? httpOptions : {});}


  DeleteService(url:string,token:boolean=true,httpOptions:any={}){
    return this.httpClient.delete(url,token && httpOptions);
  }

  GetService(url:string,token:boolean=true,httpOptions:any={}){
    return this.httpClient.get(url,token && httpOptions);
  }
  PutService(url:string, reqData:any,token:boolean=true,httpOptions:any={}){
    return this.httpClient.put(url,reqData,token && httpOptions);
  }
  
  PatchService(url:string, reqData:any,token:boolean=true,httpOptions:any={}){
    return this.httpClient.patch(url,reqData,token && httpOptions);
  }
}
