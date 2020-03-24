import { Component } from '@angular/core';
import { Bug } from "./models/Bug";
import { BugOperationsService } from './services/bugOperations.service';

@Component({
    selector : 'app-bugs',
    templateUrl : 'bugs.component.html'
})
export class BugsComponent{
    bugsList : Bug[] = [];
    trimTextLength : number = 30;
    
    constructor(private bugOperations : BugOperationsService){

    }
    onAddNewClick(newBugName: string){
        const newBug : Bug = this.bugOperations.createNew(newBugName);
        this.bugsList.push(newBug);
    }

    onBugNameClick(bugToToggle : Bug){
        this.bugOperations.toggle(bugToToggle);
    }

    onRemoveClick(bugToRemove : Bug){
        this.bugsList.splice(this.bugsList.indexOf(bugToRemove), 1);
    }

    onRemoveClosedClick(){
        this.bugsList = this.bugsList.filter(bug => !bug.isClosed);
    }

    getClosedCount(){
        return this.bugsList.reduce((result, bug) => bug.isClosed ? ++result : result, 0);
    }
}