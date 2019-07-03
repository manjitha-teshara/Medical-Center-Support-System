import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { FormGroup, FormControl, Validators } from "@angular/forms";

import { environment } from 'src/environments/environment';
import { BookingForm } from './booking-form.model';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
 
  selectedBooking: BookingForm  = {
    _id: '',
    doctorsName:'',
    firstName: '',
    lastName:'',
    mobie: '',
    date: '',
    timeSlots: '',

  } ;

  booking: BookingForm [];
  readonly baseURL = environment.apiBaseUrl ;

  constructor(private http: HttpClient) { }

  postBooking(booking: BookingForm) {
    console.log(' in post book');
    console.log('*********************PostBooking');
    console.log(booking);
    console.log('*********************PostBooking');

    return this.http.post(environment.apiBaseUrl + '/booking',booking);
  }

  getBooking() {
    console.log(' get doctor list fn');
    return this.http.get(environment.apiBaseUrl + '/booking');
  }
}
