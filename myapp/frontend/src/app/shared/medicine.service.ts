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
  readonly baseURL2= 'http://localhost:3000/api/getMedicine'
  readonly baseURL3= 'http://localhost:3000/api/updateMedicine'
  readonly baseURL4= 'http://localhost:3000/api/deleteMedicine'
  readonly baseURL5= 'http://localhost:3000/api/getMedicineById'



  constructor(private http:HttpClient) { }
  noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'True' }) };
  
  postMedicine(med : Medicine){
    return this.http.post(this.baseURL,med,this.noAuthHeader);
  }

  getMedicineList(){
    return this.http.get(this.baseURL2);
  }

  getMedicineByID(_id:string){
    let url = this.baseURL5 + '/' + _id;
    console.log('url', url)
    return this.http.get(this.baseURL5 + '/' + _id);
  }

  editMedicine(med:Medicine){
    return this.http.put(this.baseURL3, med);
  }

  deleteMedicine(_id:string){
    return this.http.delete(this.baseURL4 + '/' + _id);
  }
}
