import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private _httpService: HttpService){}

  title: string = 'My first angular2-google-maps project';
  lat: number = 51.678418;
  lng: number = 7.809007;

  ngOnInit() {


  
  }

}
