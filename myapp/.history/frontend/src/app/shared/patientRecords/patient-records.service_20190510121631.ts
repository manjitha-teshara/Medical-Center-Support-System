import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {environment} from '../../../environments/environment';
import { PatientRecordClass } from './patient-record-class.model';


@Injectable({
  providedIn: 'root'
})
export class PatientRecordsService {

  selectedPatientRecordClass: PatientRecordClass = {

    id: '',
    name: '',
    age: '',
    cost: '',
    description: '',
    date: ''
     };


  constructor(private http: HttpClient) { }


  noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'True' }) };

  postPatientRecord() {
    return this.http.post(environment.apiBaseUrl + '/patientRecord', this.noAuthHeader);
    }


}

