import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Applicant} from "../models/applicant.model";

const baseUrl = 'http://localhost:8080/api/applicants';

@Injectable({
  providedIn: 'root'
})
export class ProyectService {

  constructor(private http: HttpClient) { }

  getAll():Observable<Applicant[]>{
    
    return this.http.get<Applicant[]>(baseUrl);
  }

  get(id: any): Observable<Applicant>{
    return this.http.get<Applicant>(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any>{
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any):Observable<any>{
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any):Observable<any>{
    return this.http.delete(`${baseUrl}/${id}`)
  }

  deleteAll():Observable<any>{
    return this.http.delete(baseUrl);
  }

  findByDpi(dpi: any):Observable<Applicant[]>{
    return this.http.get<Applicant[]>(`${baseUrl}?dpi=${dpi}`);
  }

}
