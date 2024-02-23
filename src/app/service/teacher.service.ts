import { Injectable } from '@angular/core';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Teacher } from '../models/teacher';

import { Observable } from 'rxjs';
import { TeacherAdd } from '../models/TeachersAdd';


@Injectable({
  providedIn: 'root'
})
export class TeacherService {
  apiUrl = "http://localhost:8080/api/";

  constructor(private httpClient: HttpClient  ) { }

  getTeacher():Observable<Teacher[]> {
    let newPath=this.apiUrl+"teacher/getall";
    return this.httpClient.get<Teacher[]>(newPath);
  }
   add(teacher:TeacherAdd){
     return this.httpClient.post(this.apiUrl+"teacher/add",teacher)
   }
 
}
