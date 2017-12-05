import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app.routing';
 

import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';

 import { SchoolsService } from './schools.service';
 import { Configuration } from './app.constants';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
     HttpModule
    
    
  ],
  providers: [ { provide: APP_BASE_HREF, useValue: '/' }, Configuration],
  bootstrap: [AppComponent]
})
export class AppModule { }
