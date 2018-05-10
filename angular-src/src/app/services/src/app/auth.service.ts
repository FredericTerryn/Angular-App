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
    return this.http.post('http://localhost:3000/users/register', user, {headers: headers}).map(res => res.json());
  }

  addquote(uitspraak){
    let headers= new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/Uitspraken/newuitspraak', uitspraak, {headers: headers}).map(res => res.json());
  }

  authenticateUser(user){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/users/authenticate', user, {headers: headers}).map(res => res.json());
  }

  getProfile(){
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authtoken);
    headers.append('Content-Type', 'application/json');
    return this.http.get('http://localhost:3000/users/profile', {headers: headers}).map(res => res.json());
  }

  getUitspraken(){
    let headers = new Headers();
    this.loadToken();
    headers.append('Content-Type', 'application/json');
    return this.http.get('http://localhost:3000/Uitspraken/overzicht', {headers: headers}).map(res => res.json());
  }

  getExamenvragen(){
    let headers = new Headers();
    this.loadToken();
    headers.append('Content-Type', 'application/json');
    return this.http.get('http://localhost:3000/examens/overzicht', {headers: headers}).map(res => res.json());
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

  addExamenVraag(examenvraag){
    let headers= new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/examens/nieuwevraag', examenvraag, {headers: headers}).map(res => res.json());
  }
}
