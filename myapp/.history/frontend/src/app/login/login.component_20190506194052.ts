import {Component, OnInit } from '@angular/core';
import {Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {FormControl, Validators} from '@angular/forms';
import {UserService} from '../shared/user.service';
import {User} from '../shared/user.model';
import { NgForm } from '@angular/forms';
import { error } from '@angular/compiler/src/util';
import Swal from 'sweetalert';
import { Router } from '@angular/router';

export interface DialogData {
  animal: string;
  name: string;
}



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

usr = new User();
  ngOnInit() {


  }

  constructor(public dialog: MatDialog,private userservce :UserService) {}
 

  openDialogSignIn(): void {
    const dialogRef = this.dialog.open(LoginDialog, {
      width: '500px',
    });
  }

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('The dialog was closed');
    //   this.animal = result;
    // });
  openDialogSignUp(): void {
    const dialogRef = this.dialog.open(SignupDialog, {
      width: '500px',
    });
  }
}



//get loging loalog box
@Component({
  selector: 'login-dialog',
  templateUrl: 'login-dialog.html',
  styleUrls: ['./login.component.css'],
})
export class LoginDialog {
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  serverErrorMessages:string;

  constructor(
    public dialogRef: MatDialogRef<LoginDialog>,
    public dialog: MatDialog,
    private userService:UserService,
    private router : Router,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

    /**constructor(private userService: UserService,private router : Router) { } */

  model={
    email:'',
    password:''
  };

  onNoClickSignUp(): void {
    this.dialogRef.close();
    const dialogRef = this.dialog.open(SignupDialog, {
      width: '500px',
    });
  }
  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }
  /****/
  onSubmit(form : NgForm){
    this.userService.login(form.value).subscribe(
      res => {
        this.userService.setToken(res['token']);
        this.router.navigateByUrl('/docter');/**set naviagation to doctor dash board mailnly */
      },
      err => {
        this.serverErrorMessages = err.error.message;
      }
    );
  }
  
  /*****/
  hide = true;
}



//get sign up dialog box
@Component({
  selector: 'signup-dialog',
  templateUrl: 'signup-dialog.html',
  styleUrls: ['./login.component.css'],
  providers:[UserService]
})


export class SignupDialog {
usr =new User();
emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
phone =/^(\+94)[0-9]{9,9}$/;
showSucessMessage:boolean;
serverErrorMessages:string;
  constructor(
    public dialogRef: MatDialogRef<LoginDialog>,
    public dialog: MatDialog,
    private usersevice:UserService,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}


    onSubmit(form: NgForm){
      this.usersevice.postuser(form.value).subscribe(
        res=>{
          this.resetForm(form);

          Swal({
            title: "Good job!",
            text: "You Have Sussefully registered!",
            icon: "success",
          });
        },
        err=>{
         
          swal ( "Oops " ,"",  "error" )
        }
      )
    }
  
  onNoClickSignIn(): void {
    this.dialogRef.close();
    const dialogRef = this.dialog.open(LoginDialog, {
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

  signUpFunction(form:NgForm){
    console.log("ck sign up");
    return this.usersevice.postuser(form.value).subscribe(
        res=>{
          this.showSucessMessage=true;
          setTimeout(()=>this.showSucessMessage=false,4000);
          this.resetForm(form);
        },
        err=>{
          if(err.status==422){
            this.serverErrorMessages=err.error.join('<br/>');
          }
          else
            this.serverErrorMessages="Something went wrong.Please contact admin. ";

        }
    );
    }

    resetForm(form: NgForm) {
      this.usersevice.selectedUser = {
        userName:'',
      email:'',
      phonenumber:'',
      password:''
      };
      form.resetForm();
      this.serverErrorMessages = '';

    
  }

 
}






