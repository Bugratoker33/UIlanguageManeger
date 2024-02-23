import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TeachersResponse } from '../models/TeacherResponeModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeacherresponseService {
  apiUrl = "http://localhost:8080/api/";
  constructor(private httpClient:HttpClient) {

   }
   getTeacherById():Observable<TeachersResponse[]>{
    let newPath=this.apiUrl+"teacher/getById";
    return this.httpClient.get<TeachersResponse[]>(newPath);

  }
}
