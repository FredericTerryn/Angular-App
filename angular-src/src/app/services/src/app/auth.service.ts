import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {tokenNotExpired} from 'angular2-jwt';



@Injectable()
export class AuthService {
  authtoken: any;
  user: any; 

  constructor(private http: Http) { }


  registerUser(user){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('users/register', user, {headers: headers}).map(res => res.json());
  }

  authenticateUser(user){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('users/authenticate', user, {headers: headers}).map(res => res.json());
  }

  getProfile(){
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authtoken);
    headers.append('Content-Type', 'application/json');
    return this.http.get('/users/profile', {headers: headers}).map(res => res.json());
  }

  loadToken(){
    const token = localStorage.getItem('id_token');
    this.authtoken = token;
  }

  loggedIn(){
     return tokenNotExpired('id_token');;
  }

  storeUserData(token, user){
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authtoken = token;
    this.user = user;
  }

  logout(){
    this.authtoken = null;
    this.user = null;
    localStorage.clear();
  }
}
