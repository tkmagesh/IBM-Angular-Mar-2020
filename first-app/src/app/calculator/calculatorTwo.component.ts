import { Component } from '@angular/core';
import { CalculatorModel } from "./calculatorModel";
@Component({
    selector : 'app-calculator-2',
    template : `
        <h1>Calculator-Two</h1>
        <hr>
        <input type="number" (input)="model.n1 = $event.target.valueAsNumber" />
        <!-- <select (change)="selectOperator=$event.target.value"> -->
        <select #selectOperatorRef>
            <option value="add">Add</option>
            <option value="subtract">Subtract</option>
            <option value="multiply">Multiply</option>
            <option value="divide">Divide</option>
        </select>
        <input type="number" (input)="model.n2 = $event.target.valueAsNumber">
        <input type="button" value="Calculate" (click)="model[selectOperatorRef.value]()">
        <div>{{model.result}}</div>

    `,
    providers : [
        CalculatorModel
    ]
})
export class CalculatorTwoComponent{
    //selectOperator : string = 'add';

    constructor(public model : CalculatorModel){

    }

    /* onCalculateClick(){
         switch (this.selectOperator) {
            case 'add':
                this.model.add();
                break;
            case 'subtract':
                this.model.subtract();
                break;
            case 'multiply':
                this.model.multiply();
                break;
            case 'divide':
                this.model.divide();
                break;
        
            default:
                break;
        }

        //this.model[this.selectOperator]();
    } */
}