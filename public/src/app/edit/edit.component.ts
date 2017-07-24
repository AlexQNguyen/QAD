import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Deep } from '../deep';
import { DashboardComponent } from "../dashboard/dashboard.component"

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  deep;
  param = null;
  userName = "";
//talks to services and the from in the edit.html

  submitAnswer(){
      console.log(this.userName)
      this._httpService.addAnswer(this.deep, this.param,)
      .then(newdeep => {this.deep = newdeep, this.goBack()})
      .catch(err => console.log(err));
    }

//Redirect function
  goBack(){
  this.router.navigate(["/dashboard"])
  }



//constructor, Service to talk to DB, ActivatedRoute for params, Router for redirect
  constructor(private _httpService: HttpService, private _route: ActivatedRoute, private router:Router )
      {this._route.params.subscribe((param)=>{
      this.param = param._id;
    })
  }

//showdeep service initates when you click edit.html---> grabs the deep info
  ngOnInit() {
    console.log(this.param);
    this._httpService.showdeep(this.param)
    .then(deep => {this.deep = deep})
    .catch(err => console.log("this is an" , err));
  }

}
