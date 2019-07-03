import { Component, OnInit, Inject } from '@angular/core';
import { DoctorService } from '../../shared/doctor/doctor.service';
import { Doctor } from '../../shared/doctor/doctor.model';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { User } from 'src/app/shared/user.model';
import { NgForm } from '@angular/forms';
import { BookingForm } from 'src/app/shared/booking-form.model';
import { BookingService } from 'src/app/shared/booking.service';

import swal from 'sweetalert';



export interface DialogData {
  animal: string;
  name: string;
  doctor: Doctor;
  Doctors: Doctor;
}

  


@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css'],
  providers: [DoctorService]
})
export class PatientComponent implements OnInit {
  
   
   Doctors: any;
  // constructor() { }

  constructor( private doctorservice: DoctorService, public dialog: MatDialog) {}

  
  ngOnInit() {
  
  

    this.doctorservice.getDoctorsList().subscribe((res ) => {
      this.Doctors = res as Doctor[];
      console.log(res);

    });
    

   
  }
  openDialogBooking(dname: Doctor): void {
    console.log(dname);
    const dialogRef = this.dialog.open(BookingDialog, {
      width: '800px',
      data: {doctor : dname}, 
      
      }); // , {data: {'dname': 'dname'}}
  }
  
  // openDialogBooking(): void {
  //   const dialogRef = this.dialog.open(BookingDialog, {
  //      width: '800px',
  //      data: {
  //      doctor: this.selectedRow.fullname ,
  //      check: this.selectedRow.checkuptype ,
  //      sch: this.selectedRow.doctorshedule ,
        
  //      }
  //   });
  // }
  // onRowClick(row){
  //   this.selectedRow = row;
  // }
  
}

@Component({
  selector: 'bookingdialog',
  templateUrl: 'bookingdialog.html',
  styleUrls: [ './bookingdialog.css'],
  providers: [DoctorService]
})
export class BookingDialog {

  showSucessMessage: boolean;
  serverErrorMessages: string;
  constructor(
    public dialogRef: MatDialogRef<BookingDialog>,
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private doctorservice: DoctorService , private bookingservice: BookingService) {}

    Doctors: Doctor;

    model = {

      
      _id: '',
      doctorsName:'',
      f_name: '',
      l_name: '',
      mobile: '',
      date: '',
      timeSlots: '',
    };


    

  onNoClick(): void {
    this.dialogRef.close();
  }

 



  onSubmit(form: NgForm) {

    // console.log(form.value._id);
    // console.log(form.value.f_name);
    // console.log("inonSubmitPrecord");

const bookingForm = new BookingForm();

bookingForm.firstName = form.value. f_name;
bookingForm.lastName = form.value.l_name;
bookingForm.mobie= form.value.mobile;
bookingForm.doctorsName = form.value.doctorsName;
bookingForm.date = form.value.date;
bookingForm.timeSlots = form.value.timeSlots;
 this.bookingservice.postBooking(bookingForm).subscribe(
   res => {
     this.resetForm(form);
     swal({
       title: 'checked !',
       text: 'You have Sussefully submit report !',
       icon: 'success',
     });
   },
   err => {
     swal ('Oops', '', 'error');
   }
 );
}

resetForm(form: NgForm) {
  this.bookingservice.selectedBooking = {
    _id: '',
    doctorsName:'',
    firstName: '',
    lastName:'',
    mobie: '',
    date: '',
    timeSlots: '',
  };
  form.resetForm();
  this.serverErrorMessages = '';


}





    ngOnInit() {
      console.log('**********vm');
      console.log(this.data.doctor);

      console.log('**********vm');
      // this.Doctors = this.data as Doctor[];

    // this.doctorservice.getDoctorsList().subscribe((res ) => {
    //   this.Doctors = res as Doctor[];
    //   console.log(res);

    // });

    this.doctorservice.getSelectDoctor(this.data.doctor).subscribe((res) => {
      this.Doctors = res as Doctor;
      console.log('*************getselect');
      console.log(res);
      console.log('*************getselect');
    });
   }



   hide = true;
 
}
  
  


 
 
  











  
   
  