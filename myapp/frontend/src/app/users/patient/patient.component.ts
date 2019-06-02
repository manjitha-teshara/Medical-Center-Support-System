import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../../shared/doctor/doctor.service';
import { Doctor } from '../../shared/doctor/doctor.model';


  


@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css'],
  providers: [DoctorService]
})
export class PatientComponent implements OnInit {
  

   Doctors: any;
  // constructor() { }

  constructor( private doctorservice: DoctorService) {}


  ngOnInit() {
  
  

    this.doctorservice.getDoctorsList().subscribe((res ) => {
      this.Doctors = res as Doctor[];
      console.log(res);

    });

   
  }
  
}

  
  
  


  // openDialogBooking(): void {
  //   const dialogRef = this.dialog.open(BookingDialog, {
  //     // width: '800px',
  //   });
  // }

 
  











  
   
  