import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/user.service';
import {NgForm} from '@angular/forms';
import { Inject } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {User} from '../../shared/user.model';
import { error } from '@angular/compiler/src/util'





@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
  providers:[UserService]
})
export class SignUpComponent implements OnInit {

    showSucessMessage:boolean;
    serverErrorMessages:string;
    
    onSubmit(from:NgForm){
        this.userService.postUser(from.value).subscribe(
            res=>{
                this.showSucessMessage=true;
                setTimeout(()=>this.showSucessMessage=false,4000);
                this.resetForm(from);
            },
            err=>{
                if(err.status===422){
                    this.serverErrorMessages=err.error.join('<br/>');
                }
                else
                    this.serverErrorMessages='Something went wrong.please contact admin.';
            }
        );
        
        setForm(from:NgForm){
            this.userService.selectedUser={
            fullName:'',
            email:'',
            password:''
            };
            from.resetForm();
            this.serverErrorMessages='';
        }
    
    
    
      emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  constructor(private userService: UserService) { }

  ngOnInit() {
  }

}
}
