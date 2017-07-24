import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import {HttpService} from '../http.service';
import { Deep } from '../deep';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName: null;
  deep = new Deep();


  constructor(private router: Router, private _httpService: HttpService) { }
  onLogin(){
    this._httpService.updateUser(this.userName);
    this.router.navigate(['/dashboard']);
  }


  ngOnInit() {

  }

}
