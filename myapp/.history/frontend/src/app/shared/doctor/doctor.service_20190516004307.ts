import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {environment} from '../../../environments/environment';


import { Doctor } from './doctor.model';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  selectedDoctor: Doctor  = {
    fullname: '',
    checkuptype: '',
    price: '',
    image: '',
    doctorshedule: ''

  } ;

  doctores: Doctor [];
  readonly baseURL = environment.apiBaseUrl ;


  constructor(private http: HttpClient) { }

  postDoctor(doctor: Doctor) {
    return this.http.post(this.baseURL, doctor);
  }

  getDoctorsList() {
    console.log(' get doctor list fn');
    return this.http.get(environment.apiBaseUrl + '/doctor');
  }

  getSelectDoctor(doctores: Doctor[]) {
    console.log(' get selected doctor ');
    console.log(doctores._id);
    console.log(environment.apiBaseUrl + '/getNewSelect' + `/${doctores._id}`);
    return this.http.get(environment.apiBaseUrl + '/getNewSelect' + `/${doctores._id}`);
  }

}

