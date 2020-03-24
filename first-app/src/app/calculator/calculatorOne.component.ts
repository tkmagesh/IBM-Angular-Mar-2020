import { Component } from "@angular/core";
import { CalculatorModel } from './calculatorModel';

@Component({
    selector : 'app-calculator-1',
    template : `
        <br/>
        <br/>
        <h1>Calculator-One</h1>
        <hr>
        <input type="number" (input)="model.n1 = $event.target.valueAsNumber">
        <input type="number" (input)="model.n2 = $event.target.valueAsNumber">
        <br>
        <input type="button" value="Add" (click)="onAddClick()">
        <input type="button" value="Subtract" (click)="onSubtractClick()">
        <input type="button" value="Multiply" (click)="onMultiplyClick()">
        <input type="button" value="Divide" (click)="onDivideClick()">
        <div>{{model.result}}</div>
    `,
    providers : [ 
        CalculatorModel
    ]
})
export class CalculatorOneComponent{
    
    /* 
    model : CalculatorModel ;
    constructor(model : CalculatorModel){
        this.model = model;
    } 
    */

    constructor(public model : CalculatorModel){

    }

    onAddClick(){
        this.model.add()
    }
    onSubtractClick(){
        this.model.subtract()
    }
    onMultiplyClick(){
        this.model.multiply()
    }
    onDivideClick(){
        this.model.divide()
    }
}