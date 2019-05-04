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


  noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'True' }) };

  constructor(private http :HttpClient) { }

  login(authCredentials) {
    return this.http.post(environment.apiBaseUrl + '/authenticate', authCredentials,this.noAuthHeader);
  }
 
 setToken(token: string) {
    localStorage.setItem('token', token);
  }
 
  getToken() {
    return localStorage.getItem('token');
  }
 
  deleteToken() {
    localStorage.removeItem('token');
  }

  getUserPayload(){
    // var token=localStorage.getItem('token');
    var token=this.getToken();
    if(token){
      var getUserPayload=atob(token.split('.')[1]);
      return JSON.parse(getUserPayload);
    }
    else
      return null;
  }

  getUserProfile(){
    return this.http.get(environment.apiBaseUrl+'/userProfile');
  }

  isLoggedIn(){
    var userPayload=this.getUserPayload();
    if(userPayload)
      return userPayload.exp > Date.now()/1000;
    else
      return  null;
  }

  postuser(user:User){
    return this.http.post(environment.apiBaseUrl+'/register',user,this.noAuthHeader);
  }



}
