import { Injectable } from '@angular/core';

@Injectable()
export class ValidateService {

  constructor() { }

  validateRegister(user){
    if(user.name == undefined ||user.email == undefined || user.Username == undefined || user.password == undefined){
      return false;
    } else {
      return true;
    }
  }

  validateEmail(email){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }


validateQuote(uitspraak){
  if(uitspraak.inhoud == undefined ||uitspraak.leerkracht == undefined || uitspraak.school == undefined){ 
    return false;
  } else {
    return true;
  }
}

validateExamenvraag(vraag){
  if(vraag.vraag == undefined ||vraag.vak == undefined || vraag.academiejaar1 == undefined || vraag.academiejaar1 == undefined || vraag.moeilijkheidsgraad == undefined ){ 
    return false;
  } else {
    return true;
  }
}


}