import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router, ActivatedRoute } from '@angular/router';
import {DashboardComponent} from "../dashboard/dashboard.component";
import { Deep } from '../deep';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent {
  deep;
  param = null;
  userName = "";

submitNote(){
    console.log(this.deep)
    this._httpService.addAnswer(this.deep, this.param,)
    .then(newdeep => {this.deep = newdeep, this.goBack()})
    .catch(err => console.log(err));
  }

  onLike(){
    this._httpService.updatedeep(this.param, this.deep)
    .then(newstar => {this.deep = newstar, this.ngOnInit()})
    .catch(err => console.log(err));
  }

  goBack(){
  this.router.navigate(["/dashboard"])
  }




//constructor, Service to talk to DB, ActivatedRoute for params
  constructor(private _httpService: HttpService, private _route: ActivatedRoute, private router:Router )
      {this._route.params.subscribe((param)=>{
      this.param = param._id;
    })
  }

  ngOnInit() {
    this._httpService.showdeep(this.param)
    .then(deep => {this.deep = deep})
    .catch(err => console.log("this is an" , err));
  }

}
