import { Component, EventEmitter, Output } from "@angular/core";
import { BugOperationsService } from '../services/bugOperations.service';
import { Bug } from "../models/Bug";

@Component({
    selector : 'app-bug-edit',
    template : `
        <section class="edit">
            <label for="">Bug Name :</label>
            <input type="text" (input)="newBugName = $event.target.value">
            <span> [ {{newBugName.length}} ] </span>
            <input type="button" value="Add New" (click)="onAddNewClick(newBugName)">
        </section>
    `
})
export class BugEditComponent{
    newBugName: string = '';

    @Output()
    bugAdded : EventEmitter<Bug> = new EventEmitter<Bug>();

    constructor(private bugOperations : BugOperationsService){

    }
    onAddNewClick(newBugName: string) {
        const newBug: Bug = this.bugOperations.createNew(newBugName);
        //this.bugsList.push(newBug);
        //this.bugsList = [...this.bugsList, newBug];
        this.bugAdded.emit(newBug);
    }

}