import { Component, OnInit, Inject } from '@angular/core';
import { DoctorService } from '../../shared/doctor/doctor.service';
import { Doctor } from '../../shared/doctor/doctor.model';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { User } from 'src/app/shared/user.model';


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

  
  constructor(
    public dialogRef: MatDialogRef<BookingDialog>,
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private doctorservice: DoctorService) {}

    Doctors: Doctor;





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
  
  


 
 
  











  
   
  