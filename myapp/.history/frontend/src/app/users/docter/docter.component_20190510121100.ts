import { Component, OnInit , Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { NgForm } from '@angular/forms';
import { PatientRecordsService } from '../../shared/patientRecords/patient-records.service';
import { from } from 'rxjs';
import swal from 'sweetalert';


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
 console.log("inonSubmitPrecord");
 this.patientRecordsService.postPatientRecord(from.value).subscribe(
   res=> {
     this.resetForm(form);
     Swal({
       title: 'checked !',
       text: 'You have Sussefully submit report !',
       icon: 'sucess',
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
  cost: ''
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

  constructor(
    public dialogRef: MatDialogRef<CheckEarn>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}




