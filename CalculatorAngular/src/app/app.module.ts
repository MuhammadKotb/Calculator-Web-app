import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Calculator } from './Calculator/Calculator.component';
import {  HttpClientModule } from '@angular/common/http';
import { CalculatorService } from './Calculator/calculator.service';
@NgModule({
  declarations: [
    AppComponent,
    Calculator
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [CalculatorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
