import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';
import { BehaviorSubject } from 'rxjs/BehaviorSubject'
import { Subscription } from "rxjs/Subscription";

@Injectable()
export class HttpService {
userName = "";
subscription: Subscription;
//this file talks directly to the routes.js file in your server
  constructor(private _http: Http) {
    this.subscription = this.observedUser.subscribe(
        (updateUser) => { this.userName = updateUser; },
        (err) => { console.log('error', err)},
        () => {}
    )
  }

  observedUser = new BehaviorSubject(null);

  updateUser(user: String){
    this.observedUser.next(user);
  }
//this function hits the /deeps in routes.js
  getAll() {
  	return this._http.get('/deeps').map((deeps) => deeps.json()).toPromise();
  }

//this function hits the /newdeeps in routes.js (deep) is the object you pass
//to the create contorller
  adddeep(deep) {
    deep.userName = this.userName;
    return this._http.post('/newdeeps', deep).map((deeps) => deeps.json()).toPromise();
  }

  addAnswer(deep, id) {
    deep.answers.author = this.userName;
    return this._http.post('/addnote/'+ id , deep).map((deeps) => deeps.json()).toPromise();
  }
//this function hits the /deeps/show/:id
  showdeep(id){
    return this._http.get('/deep/show/' + id).map((deeps)=> deeps.json()).toPromise();
  }

//this function hits the /updatedeep/:id
//id is from params, deep is the object you are updating
  updatedeep(id, deep){
    console.log(deep)
    return this._http.post('/updatedeep/' + id, deep).map((deeps)=> deeps.json()).toPromise();

  }
//this function hits the /deep/destory/:id
  destroydeep(id){
      return this._http.get('/deep/destroy/' + id).map((deeps)=> deeps.json()).toPromise();

  }

}
