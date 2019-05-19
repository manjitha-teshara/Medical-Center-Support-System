import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {environment} from '../../../environments/environment';
import { PatientRecordClass } from './patient-record-class.model';


@Injectable({
  providedIn: 'root'
})
export class PatientRecordsService {

  var curTime=$moment().format('MM/DD/YYYY');
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

  postPatientRecord(patientRecordClass: PatientRecordClass) {
    console.log('in side post patient record fun');

    return this.http.post(environment.apiBaseUrl + '/patientRecord', patientRecordClass, this.noAuthHeader);
    }


}

