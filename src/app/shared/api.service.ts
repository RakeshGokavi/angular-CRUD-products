import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }

  postProduct(data : any){
    console.log("postt")
return this.http.post<any>("http://localhost:3000/posts",data)
.pipe(map((res:any)=>{
  return res;
}))
  }

  putProduct(data : any,id: number){
    return this.http.put<any>("http://localhost:3000/put"+id,data)
    .pipe(map((res:any)=>{
      return res;
    }))
      }

      getProduct(){
        return this.http.get<any>("http://localhost:3000/posts")
        .pipe(map((res:any)=>{
          return res;
        }))
          }
}
