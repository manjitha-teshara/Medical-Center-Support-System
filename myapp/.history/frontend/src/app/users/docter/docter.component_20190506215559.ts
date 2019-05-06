import { Component, OnInit , Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';


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
      width: '250px',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

}

//checkPatient dialog

@Component({
  selector: 'app-check-patient-box',
  templateUrl: './checkPatient.html',
})
// tslint:disable-next-line:component-class-suffix
export class CheckPatient {

  constructor(
    public dialogRef: MatDialogRef<CheckPatient>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}

//check Earn


@Component({
  selector: 'app-check-earn-box',
  templateUrl: './checkEarn.html',
})
// tslint:disable-next-line:component-class-suffix
export class CheckEarn {

  constructor(
    public dialogRef: MatDialogRef<CheckPatient>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}




