import { Component, OnInit, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig} from '@angular/material';
import { DoctorService } from '../../shared/doctor/doctor.service';
import { Doctor } from '../../shared/doctor/doctor.model';


export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-pharmacist',
  templateUrl: './pharmacist.component.html',
  styleUrls: ['./pharmacist.component.css']
})

export class PharmacistComponent {
  animal: string;
  name: string;

  constructor(public dialog: MatDialog) {}

  OpenDialogPrescription(): void {
    const dialogRef = this.dialog.open(ViewPrescription, {
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

  OpenDialogAvailability(): void {
    const dialogRef = this.dialog.open(AvailabilityView, {
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

  OpenDialogFee(): void {
    const dialogRef = this.dialog.open(CalculateFee, {
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

}

@Component({
  selector: 'app-prescription-box',
  templateUrl: 'prescription.html',
})

// tslint:disable-next-line:component-class-suffix
export class ViewPrescription {

  constructor(
    public dialogRef: MatDialogRef<ViewPrescription>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}

@Component({
  selector: 'app-availability-box',
  templateUrl: './availability.html',
})
// tslint:disable-next-line:component-class-suffix
export class AvailabilityView {

  constructor(
    public dialogRef: MatDialogRef<AvailabilityView>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}


@Component({
  selector: 'app-fee-box',
  templateUrl: './fee.html',
})

// tslint:disable-next-line:component-class-suffix
export class CalculateFee {

  constructor(
    public dialogRef: MatDialogRef<CalculateFee>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}


