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
    _id: '',
    fullname: '',
    checkuptype: '',
    price: '',
    image: '',
    doctorshedule: []

  } ;

  doctores: Doctor [];
  readonly baseURL = environment.apiBaseUrl ;

  constructor(private http: HttpClient) { }

  postDoctor(doctor: Doctor) {
    console.log(' in post doctor');
    console.log('*********************PostDoctor');
    console.log(doctor);
    console.log('*********************PostDoctor');

    return this.http.post(environment.apiBaseUrl + '/doctor', doctor);
  }

  getDoctorsList() {
    console.log(' get doctor list fn');
    return this.http.get(environment.apiBaseUrl + '/doctor');
  }

  getSelectDoctor(doctores: Doctor) {
    console.log(' get selected doctor ');
    // console.log(doctores._id);
    console.log(environment.apiBaseUrl + '/getNewSelect' + `/${doctores._id}`);
    return this.http.get(environment.apiBaseUrl + '/getNewSelect' + `/${doctores._id}`);
  }

}

