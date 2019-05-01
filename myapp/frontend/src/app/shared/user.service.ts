import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import{environment} from '../../environments/environment';
import{User} from './user.model';
@Injectable({
  providedIn: 'root'
})
export class UserService {
 
  selectedUser:User={
    
    userName:'',
    email:'',
    phonenumber:'',
    password:''
   

  }
  constructor(private http :HttpClient) { }

  

  postuser(user:User){
    return this.http.post(environment.apiBaseUrl+'/register',user);
  }



}
