import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({providedIn: 'root'})
export class TaskServiceService {
  url=environment.baseUrl
  constructor(private httpClient: HttpClient) { }


  getTaskList(){
    return this.httpClient.get(`${this.url}`+`/tasks`)
  }

  getTaskbyId(){
   return this.httpClient.get(`${this.url}`+`/tasks`)
  }

  createTask(){

    return this.httpClient.get(`${this.url}`+`/tasks`)
  }
  updateTask(){
    return this.httpClient.get(`${this.url}`+`/tasks`)
  }

  deleteTask(){
    return this.httpClient.get(`${this.url}`+`/tasks`)
  }
  
}