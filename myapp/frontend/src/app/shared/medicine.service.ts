import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Medicine } from './medicine.model';

@Injectable({
  providedIn: 'root'
})
export class MedicineService {
  selectedMedicine: Medicine;
  medi: Medicine[];

  readonly baseURL= 'http://localhost:3000/api/addMedicine'

  constructor(private http:HttpClient) { }
  noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'True' }) };
  postMedicine(med : Medicine){
    return this.http.post(this.baseURL,med,this.noAuthHeader);
  }
}
