import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
subscription: Subscription;
userName = "";
//talks to services and the from in the dashboard.html
  onDelete(id){
    this._httpService.destroydeep(id)
    .then((deeps)=> {this.deeps = deeps, this.ngOnInit() })
    .catch((err)=>{console.log("delete error")})
  }

//constructor, Service to talk to DB, Router for redirect & carrying user across
  constructor(private _httpService: HttpService, private _route:Router){
    this.subscription = _httpService.observedUser.subscribe(
        (updateUser) => { this.userName = updateUser; },
        (err) => { console.log('error', err)},
        () => {}
    )
  }
  deeps = [];

  onDestroy() {
		this.subscription.unsubscribe();
	}

//when you intialize the Dashboard it will load all deeps
  ngOnInit() {

    this._httpService.getAll()
    .then((deeps) => {this.deeps = deeps})
    .catch((err)=>{console.log("TEST ERROR");
    })
  }
}
