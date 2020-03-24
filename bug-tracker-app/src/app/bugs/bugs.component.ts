import { Component } from '@angular/core';

interface Bug{
    id : number,
    name : string,
    isClosed : boolean,
    createdAt : Date
};

@Component({
    selector : 'app-bugs',
    templateUrl : 'bugs.component.html'
})
export class BugsComponent{
    bugsList : Bug[] = [];
    private currentBugId : number = 0;

    onAddNewClick(newBugName: string){
        const newBug : Bug = {
            id : ++this.currentBugId,
            name : newBugName,
            isClosed : false,
            createdAt : new Date()
        };
        this.bugsList.push(newBug);
    }
    onBugNameClick(bugToToggle : Bug){
        bugToToggle.isClosed = !bugToToggle.isClosed;
    }
}