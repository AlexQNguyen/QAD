import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Deep } from '../deep';
import { Router } from '@angular/router';
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  deep = new Deep();
  userName = "";
  subscription: Subscription;
//
// //talks to services and the form in the new.html
  onSubmit(deep){
    console.log(this.deep)
    this._httpService.adddeep(this.deep)
    .then(newdeep => {this.deep = newdeep, this.goBack()})
    .catch(err => console.log(err));

  }
//
  onDestroy() {
    this.subscription.unsubscribe();
  }
//
  goBack(){
  this._route.navigate(["/dashboard"])
  }
//constructor, Service to talk to DB, Router for redirect
  constructor(private _httpService: HttpService, private _route:Router) {
    this.subscription = _httpService.observedUser.subscribe(
        (updateUser) => { this.userName = updateUser; },
        (err) => { console.log('error', err)},
        () => {}
    )}

  ngOnInit() {
  }

}
