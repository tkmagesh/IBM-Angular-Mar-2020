import { Component, OnInit } from '@angular/core';

import { Bug } from "./models/Bug";
import { BugOperationsService } from './services/bugOperations.service';
import { forkJoin } from 'rxjs';

@Component({
    selector : 'app-bugs',
    templateUrl : 'bugs.component.html'
})
export class BugsComponent implements OnInit{

    bugsList : Bug[] = [];
    trimTextLength : number = 30;
    bugSortAttr : string = 'id';
    bugSortDesc : boolean = false;
    

    constructor(private bugOperations : BugOperationsService){
       
    }

    ngOnInit(){
        this.loadBugs();
    }
    
    private loadBugs(){
        this.bugOperations
            .getAll()
            .subscribe(bugs => this.bugsList = bugs);
    }
    
    onNewBugAdded(newBug : Bug){
        this.bugsList = [...this.bugsList, newBug];
    }

    onBugNameClick(bugToToggle : Bug){
        this.bugOperations
            .toggle(bugToToggle)
            .subscribe(toggledBug => this.bugsList = this.bugsList.map(bug => bug.id === toggledBug.id ? toggledBug : bug));
    }

    onRemoveClick(bugToRemove : Bug){
        this.bugOperations
            .remove(bugToRemove)
            .subscribe(_ => this.bugsList = this.bugsList.filter(bug => bug.id !== bugToRemove.id));
        //this.bugsList.splice(this.bugsList.indexOf(bugToRemove), 1);
        
    }

    onRemoveClosedClick(){
        /* this.bugsList = this.bugsList.filter(bug => !bug.isClosed); */
        /* this
            .bugsList
            .filter(bug => bug.isClosed)
            .forEach(closedBug => this.onRemoveClick(closedBug)); */

        const removeClosedBug$ = this.bugsList
            .filter(bug => bug.isClosed)
            .map(closedBug => this.bugOperations.remove(closedBug));

        forkJoin(removeClosedBug$)
            .subscribe(() => this.loadBugs());

    }

    /* getClosedCount(){
        console.log('getClosedCount triggered');
        return this.bugsList.reduce((result, bug) => bug.isClosed ? ++result : result, 0);
    } */
}