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
    bugSortAttr : string = 'id';
    bugSortDesc : boolean = false;
    
    constructor(private bugOperations : BugOperationsService){
        this.bugsList.push({ id: 1, name: 'Server communication failure', isClosed: true, createdAt: new Date()})
        this.bugsList.push({ id: 4, name: 'Application not responding', isClosed: true, createdAt: new Date() })
        this.bugsList.push({ id: 2, name: 'Data integrity checks filed', isClosed: false, createdAt: new Date() })
        this.bugsList.push({ id: 3, name: 'User actions not recognized', isClosed: false, createdAt: new Date() })
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