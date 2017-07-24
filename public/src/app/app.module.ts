import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NewComponent } from './new/new.component';
import { EditComponent } from './edit/edit.component';
import { ShowComponent } from './show/show.component';
import { DashboardComponent } from './dashboard/dashboard.component';


import { HttpService } from './http.service';
import { routing } from './app.routes';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

import { CommonModule } from '@angular/common';
import { AgmCoreModule } from '@agm/core';



@NgModule({
  declarations: [
    AppComponent,
    NewComponent,
    EditComponent,
    ShowComponent,
    DashboardComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpModule,
    AgmCoreModule.forRoot({
    apiKey: 'AIzaSyDgFCNdjaWx1ncVzPnSuQs-mhwBgp9Gz9Q'
  }),
    routing
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
