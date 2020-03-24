import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GreeterComponent } from  './greeter/greeter.component';
import { CalculatorOneComponent } from './calculator/calculatorOne.component';
import { CalculatorTwoComponent  } from "./calculator/calculatorTwo.component";
import { CalculatorResultComponent } from "./calculator/calculatorResult.component";
import { CalculatorModel } from './calculator/calculatorModel';

@NgModule({
  declarations: [
    AppComponent
    , GreeterComponent
    , CalculatorOneComponent
    , CalculatorTwoComponent
    , CalculatorResultComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    CalculatorModel
  ],
  bootstrap: [
    AppComponent
    , GreeterComponent
    , CalculatorOneComponent
    , CalculatorTwoComponent
  ]
})
export class AppModule { }

/* 
Registry of application entities
  Component, Directive, Pipe, Service

  UI Entities (component, directive, pipe) in 'declarations'
  NON UI Entities (service) in 'providers'
  Module level dependencies in 'imports'
  Top most component(s) in 'bootstrap'
*/

/* 
Application = composition of components
*/