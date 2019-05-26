import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
  readonly baseURL= 'http://localhost:3000/medicine'

  constructor(private http:HttpClient) { }

  postMedicine(med : Medicine){
    return this.http.post(this.baseURL,med);
  }
}
