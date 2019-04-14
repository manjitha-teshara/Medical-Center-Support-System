import {Component, OnInit } from '@angular/core';
import {Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {FormControl, Validators} from '@angular/forms';
import {UserService} from '../../shared/user.service';
import {User} from '../../shared/user.model';
import { NgForm } from '@angular/forms';
import { error } from '@angular/compiler/src/util';
import Swal from 'sweetalert'

export interface DialogData {
  animal: string;
  name: string;
}



@Component({
  selector: 'app-sliderpanel',
  templateUrl: './sliderpanel.component.html',
  styleUrls: ['./sliderpanel.component.css']
})
export class SliderpanelComponent implements OnInit {


usr =new User();
  ngOnInit() {
 

  }

  constructor(public dialog: MatDialog,private userservce :UserService) {}
 

  openDialogSignIn(): void {
    const dialogRef = this.dialog.open(LoginDialogInBox, {
      width: '500px',
    });
  }

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('The dialog was closed');
    //   this.animal = result;
    // });
  openDialogSignUp(): void {
    const dialogRef = this.dialog.open(SignupDialogInBox, {
      width: '500px',
    });
  }

  openDialogBooking(): void {
    const dialogRef = this.dialog.open(BookingDialog, {
      width: '500px',
    });
  }



  
}



//get loging loalog box
@Component({
  selector: 'login-dialog',
  templateUrl: 'login-dialog.html',
  styleUrls: ['./sliderpanel.component.css'],
})
export class LoginDialogInBox {

  constructor(
    public dialogRef: MatDialogRef<LoginDialogInBox>,
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClickSignUp(): void {
    this.dialogRef.close();
    const dialogRef = this.dialog.open(SignupDialogInBox, {
      width: '500px',
    });
  }
  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }
  hide = true;
}



//get sign up dialog box
@Component({
  selector: 'signup-dialog',
  templateUrl: 'signup-dialog.html',
  styleUrls: ['./sliderpanel.component.css'],
  providers:[UserService]
})


export class SignupDialogInBox {
usr =new User();
emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
phone =/^(\+94)[0-9]{9,9}$/;
  constructor(
    public dialogRef: MatDialogRef<LoginDialogInBox>,
    public dialog: MatDialog,
    private usersevice:UserService,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}


    onSubmit(form: NgForm){
      this.usersevice.postuser(form.value).subscribe(
        res=>{
          Swal({
            title: "Good job!",
            text: "You Have Sussefully registered!",
            icon: "success",
          });
        },
        err=>{
         
          swal ( "Oops" ,"",  "error" )
        }
      )
    }
  
  onNoClickSignIn(): void {

    this.dialogRef.close();
    const dialogRef = this.dialog.open(LoginDialogInBox, {
      width: '500px',
    });
  }
  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }
  hide = true;

 

}




//booking button

@Component({
  selector: 'booking-dialog',
  templateUrl: 'booking-dialog.html',
  styleUrls: ['./sliderpanel.component.css','./booking-dialog.css'],
})
export class BookingDialog {

  constructor(
    public dialogRef: MatDialogRef<BookingDialog>,
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

   
   
  hide = true;
}



