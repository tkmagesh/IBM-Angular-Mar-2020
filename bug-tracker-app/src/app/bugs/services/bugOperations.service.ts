import { Bug } from "../models/Bug";
import { BugStorageService } from './bugStorage.service';
import { Injectable } from '@angular/core';

@Injectable()
export class BugOperationsService{

    constructor(private bugStorage : BugStorageService){

    }
    createNew(newBugName:string) : Bug{
        const newBugData: Bug = {
            id: 0,
            name: newBugName,
            isClosed: false,
            createdAt: new Date()
        };
        return this.bugStorage.save(newBugData);
    }

    toggle(bugToToggle : Bug) : Bug {
        const toggledBug = {...bugToToggle, isClosed : !bugToToggle.isClosed};
        return this.bugStorage.save(toggledBug);
    }

    remove(bugToRemove : Bug) : void {
        this.bugStorage.remove(bugToRemove);
    }

    getAll() : Bug[] {
        return this.bugStorage.getAll();
    }

}