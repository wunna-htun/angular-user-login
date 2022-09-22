import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from '../model/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  url=environment.baseUrl
  constructor(private httpClient: HttpClient) { }



  register(user:any): Observable<Object> {
    console.log("register service");
    
    return this.httpClient.post(`${this.url}`+`/register`,user)

  }






  login(user:any): Observable<Object>{
    return this.httpClient.post(`${this.url}`+`/login`,user)

  }

  getuserlist(){
    return this.httpClient.get(`${this.url}`+`/users`)
  }

  deleteUser(id:string){
    return this.httpClient.delete(`${this.url}`+`/users/`+id)

  }




}
