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

  postPatientRecord(patientRecordClass: PatientRecordClass) {
    console.log('in side post patient record fun');

    return this.http.post(environment.apiBaseUrl + '/patientRecord', patientRecordClass, this.noAuthHeader);
    }

    
    getRegRecordForList(date: string) {
    console.log(' get selected getRegRecordForList ');
    // console.log(doctores._id);
    console.log(environment.apiBaseUrl + '/patientRecordList' + `/${date}`);
    return this.http.get(environment.apiBaseUrl + '/patientRecordList' + `/${date}`);
  }


}

