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

        <!-- 
        <div *ngIf="model.result > 0; then resultRef else noResultRef"></div> 
        <ng-template #resultRef>
            <div [ngClass]="{positive : model.result >= 0, negative : model.result < 0}">
                {{model.result}}
            </div>
        </ng-template>
        <ng-template #noResultRef>
            <div>No Result!!</div>
        </ng-template> 
        -->

       <!--
         <div *ngIf="model.result !== 0" [ngClass]="{positive : model.result >= 0, negative : model.result < 0}">
            {{model.result}}
        </div> 
        -->

        <app-calculator-result [data]="model.result"></app-calculator-result>
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