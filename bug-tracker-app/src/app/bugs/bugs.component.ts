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
       this.bugsList = this.bugOperations.getAll();
    }
    
    onNewBugAdded(newBug : Bug){
        this.bugsList = [...this.bugsList, newBug];
    }

    onBugNameClick(bugToToggle : Bug){
        const toggledBug : Bug = this.bugOperations.toggle(bugToToggle);
        this.bugsList = this.bugsList.map(bug => bug.id === toggledBug.id ? toggledBug : bug);
    }

    onRemoveClick(bugToRemove : Bug){
        this.bugOperations.remove(bugToRemove);
        //this.bugsList.splice(this.bugsList.indexOf(bugToRemove), 1);
        this.bugsList = this.bugsList.filter(bug => bug.id !== bugToRemove.id);
    }

    onRemoveClosedClick(){
        /* this.bugsList = this.bugsList.filter(bug => !bug.isClosed); */
        this
            .bugsList
            .filter(bug => bug.isClosed)
            .forEach(closedBug => this.onRemoveClick(closedBug));
    }

    /* getClosedCount(){
        console.log('getClosedCount triggered');
        return this.bugsList.reduce((result, bug) => bug.isClosed ? ++result : result, 0);
    } */
}