import { Component, OnInit , Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { NgForm } from '@angular/forms';
import { PatientRecordsService } from '../../shared/patientRecords/patient-records.service';
import { from } from 'rxjs';
import swal from 'sweetalert';
import { DoctorService } from '../../shared/doctor/doctor.service';
import { Doctor } from 'src/app/shared/doctor/doctor.model';
import { PatientRecordClass } from 'src/app/shared/patientRecords/patient-record-class.model';


export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-docter',
  templateUrl: './docter.component.html',
  styleUrls: []
})
export class DocterComponent {
  animal: string;
  name: string;
  

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(CheckPatient, {
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

  openDialogEarn(): void {
    const dialogRef = this.dialog.open(CheckEarn, {
      width: '250px',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

  manageDoctorView(): void {
    const dialogRef = this.dialog.open(ManageDoctorView, {
      // width: '250px',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

}







// checkPatient dialog

@Component({
  selector: 'app-check-patient-box',
  templateUrl: './checkPatient.html',
})
// tslint:disable-next-line:component-class-suffix
export class CheckPatient {
  private fieldArray: Array<any> = [];
  private newAttribute: any = {};
  showSucessMessage: boolean;
  serverErrorMessages: string;
  constructor(
    public dialogRef: MatDialogRef<CheckPatient>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private patientRecordsService: PatientRecordsService) {}

    model = {
      id: '',
      name: '',
      age: '',
      cost: '',
      date: '',
      description: ''
    };

  onNoClick(): void {
    this.dialogRef.close();
  }

  addFieldValue() {
    this.fieldArray.push(this.newAttribute);
    this.newAttribute = {};
}

deleteFieldValue(index) {
    this.fieldArray.splice(index, 1);
}

onSubmitPrecord(form: NgForm) {
//  console.log("inonSubmitPrecord");
 this.patientRecordsService.postPatientRecord(form.value).subscribe(
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
  this.patientRecordsService.selectedPatientRecordClass = {
    id: '',
  name: '',
  age: '',
  description: '',
  cost:  ,
  date: ''
  };
  form.resetForm();
  this.serverErrorMessages = '';


}


}

// check Earn


@Component({
  selector: 'app-check-earn-box',
  templateUrl: './checkEarn.html',
})
// tslint:disable-next-line:component-class-suffix
export class CheckEarn {

  userDate: string;
  NoArray: Number[];
  TotalEarn: Number = 0;
  Precords: PatientRecordClass[];
  constructor(
    public dialogRef: MatDialogRef<CheckEarn>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private patientRecordsService: PatientRecordsService) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  onChange() {
    console.log(this.userDate);
    this.patientRecordsService.getRegRecordForList(this.userDate).subscribe((res) => {
      this.Precords = res as PatientRecordClass[];

      const rows = this.Precords.length;
      console.log('array length ' + rows);
      let sum: any = 0;
      for ( let i = 0; i < rows; i++) {
       sum = sum + this.Precords[i].cost;
      }
      this.TotalEarn = sum;
      console.log('*************getselect');
      console.log(res);
      console.log('*************getselect');
    });
  }

}




// manage doctor view


@Component({
  selector: 'app-manage-doctor-view',
  templateUrl: './manageDoctorView.html',
})
// tslint:disable-next-line:component-class-suffix
export class ManageDoctorView {

  private fieldArray: Array<any> = [];
  private newAttribute: any = {};
  private sheduleArray: Array<string> = [];
  showSucessMessage: boolean;
  serverErrorMessages: string;

  constructor(
    public dialogRef: MatDialogRef<ManageDoctorView>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private doctorService: DoctorService) {}

    model = {
      fullname: '',
      checkuptype: '',
      price: '',
      image: '',
      doctorshedule: []

    };

  onNoClick(): void {
    this.dialogRef.close();
  }

  addFieldValue() {
    this.fieldArray.push(this.newAttribute);
    this.sheduleArray.push(this.newAttribute.day + ' ' + this.newAttribute.startTime  + ' ' + this.newAttribute.endTime);
    this.newAttribute = {};
}

deleteFieldValue(index) {
    this.fieldArray.splice(index, 1);
}


onSubmitDoctorView(form: NgForm) {
  console.log('in onSubmitDoctorView');
  console.log('***************onSubmitDoctorView');
  console.log(this.fieldArray);
  console.log('***************onSubmitDoctorView');

  const doctor = new Doctor();

  doctor.checkuptype = form.value.checkuptype;
  doctor.fullname = form.value.fullname;
  doctor.image = form.value.image;
  doctor.price = form.value.price;
  doctor.doctorshedule = this.sheduleArray;

  this.doctorService.postDoctor(doctor).subscribe(
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
  this.doctorService.selectedDoctor = {
    _id: '',
    fullname: '',
    checkuptype: '',
    price: '',
    image: '',
    doctorshedule: [],

  };
  form.resetForm();
  this.serverErrorMessages = '';


}

}




