import { Component, Input } from '@angular/core';

@Component({
    selector : 'app-calculator-result',
    template : `
        <div *ngIf="data !== 0; else noResultRef" [ngClass]="{positive : data >= 0, negative : data < 0}">
            {{data | currency:'INR'}}
        </div>
        <ng-template #noResultRef>
            <div>
                No Result !!!
            </div>
        </ng-template>
    `
})
export class CalculatorResultComponent{

    @Input()
    data : number = 0;
}