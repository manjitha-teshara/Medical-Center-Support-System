import {Component, OnInit } from '@angular/core';
import {Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {FormControl, Validators} from '@angular/forms';
import {UserService} from '../../shared/user.service';
import {User} from '../../shared/user.model';
import { NgForm } from '@angular/forms';
import { error } from '@angular/compiler/src/util';
import Swal from 'sweetalert';
import { Router } from '@angular/router';
import { DoctorService } from '../../shared/doctor/doctor.service';
import { Doctor } from '../../shared/doctor/doctor.model';


export interface DialogData {
  animal: string;
  name: string;
}






@Component({
  selector: 'app-sliderpanel',
  templateUrl: './sliderpanel.component.html',
  styleUrls: ['./sliderpanel.component.css'],
  providers: [DoctorService]
})
export class SliderpanelComponent implements OnInit {
  Doctors: Doctor[];

usr = new User();
  ngOnInit() {

    this.refreshDoctors();
  }

  constructor(public dialog: MatDialog, private userservce: UserService, private doctorservice: DoctorService) {}


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
      // width: '800px',
    });
  }

  openViewMore(dname): void {
    console.log(dname);
    const dialogRef = this.dialog.open(ViewMoreDialog, {data: {doctor : dname}}); // , {data: {'dname': 'dname'}}
  }

  refreshDoctors() {
    this.doctorservice.getDoctorsList().subscribe((res ) => {
      this.Doctors = res as Doctor[];
      console.log(res);

    });
  }




}



// get loging loalog box
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'login-dialog',
  templateUrl: 'login-dialog.html',
  styleUrls: ['./sliderpanel.component.css'],
})
// tslint:disable-next-line:component-class-suffix
export class LoginDialogInBox {


  constructor(
    public dialogRef: MatDialogRef<LoginDialogInBox>,
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private userService: UserService,
    private router: Router) {}


  // tslint:disable-next-line:max-line-length
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  serverErrorMessages: string;


  model = {
    email: '',
    password: ''
  };
  // tslint:disable-next-line:member-ordering
  email = new FormControl('', [Validators.required, Validators.email]);


  hide = true;

  onNoClickSignUp(): void {
    this.dialogRef.close();
    const dialogRef = this.dialog.open(SignupDialogInBox, {
      width: '500px',
    });
  }

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }

  onSubmit(form: NgForm) {
    this.userService.login(form.value).subscribe(
      res => {
        this.userService.setToken(res['token']);
        console.log(this.userService.isDoctor());
       if (this.userService.isDoctor()) {
        this.router.navigateByUrl('/doctor'); /**set naviagation to doctor dash board mailnly */
       } else if (this.userService.isPatient()) {
        this.router.navigateByUrl('/patient');
       } else if (this.userService.isAdmin()) {
        this.router.navigateByUrl('/admin');
       } else {
         this.router.navigateByUrl('');
       }

      },
      err => {
        this.serverErrorMessages = err.error.message;
      }
    );
  }
}



// get sign up dialog box
@Component({
  selector: 'signup-dialog',
  templateUrl: 'signup-dialog.html',
  styleUrls: ['./sliderpanel.component.css'],
  providers: [UserService]
})


export class SignupDialogInBox {
  constructor(
    public dialogRef: MatDialogRef<LoginDialogInBox>,
    public dialog: MatDialog,
    private usersevice: UserService,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}
usr = new User();
emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
phone = /^(\+94)[0-9]{9,9}$/;
  email = new FormControl('', [Validators.required, Validators.email]);
  hide = true;


    onSubmit(form: NgForm) {
      this.usersevice.postuser(form.value).subscribe(
        res => {
          Swal({
            title: 'Good job!',
            text: 'You Have Sussefully registered!',
            icon: 'success',
          });
        },
        err => {

          swal ( 'Oops' , '',  'error' );
        }
      );
    }

  onNoClickSignIn(): void {

    this.dialogRef.close();
    const dialogRef = this.dialog.open(LoginDialogInBox, {
      width: '500px',
    });
  }

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }



}




// booking button

@Component({
  selector: 'booking-dialog',
  templateUrl: 'booking-dialog.html',
  styleUrls: ['./sliderpanel.component.css', './booking-dialog.css'],
})
export class BookingDialog {

  constructor(
    public dialogRef: MatDialogRef<BookingDialog>,
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}



  hide = true;
}



// view more button

@Component({
  selector: 'viewMore-dialog',
  templateUrl: 'viewMore-dialog.html',
  styleUrls: ['./sliderpanel.component.css'],
  providers: [DoctorService]
})
export class ViewMoreDialog {
  constructor(
    public dialogRef: MatDialogRef<ViewMoreDialog>,
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private doctorservice: DoctorService) {}

  Doctors: Doctor[];



  hide = true;


    ngOnInit() {
      console.log('**********vm');
      console.log(this.data);
      
      console.log('**********vm');
    

    this.doctorservice.getDoctorsList().subscribe((res ) => {
      this.Doctors = res as Doctor[];
      console.log(res);
    });
    // this.onDoctorSelect(this.data);
  }

    onDoctorSelect(doctors: Doctor) {
      this.doctorservice.selectedDoctor = doctors;
      console.log('**********onDoctorSelect');
      console.log(doctors);
      console.log('**********onDoctorSelect');
    }
}




