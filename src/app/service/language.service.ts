import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Language} from '../models/language';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  apiUrl = "http://localhost:8080/api/language/getall";
  constructor( private httpClient:HttpClient) { }

  getTeacher():Observable<Language[]> {
    return this.httpClient.get<Language[]>(this.apiUrl);
  }
}
