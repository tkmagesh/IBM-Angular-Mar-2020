import { Bug } from "../models/Bug";
import { BugStorageService } from './bugStorage.service';
import { Injectable } from '@angular/core';
import { BugApiService } from './bugApi.service';
import { Observable } from 'rxjs';

//using the bugApi
@Injectable()
export class BugOperationsService {

    constructor(private bugApi : BugApiService) {

    }
    createNew(newBugName: string): Observable<Bug> {
        const newBugData: Bug = {
            id: 0,
            name: newBugName,
            isClosed: false,
            createdAt: new Date()
        };
        return this.bugApi.save(newBugData);
    }

    toggle(bugToToggle: Bug): Observable<Bug> {
        const toggledBug = { ...bugToToggle, isClosed: !bugToToggle.isClosed };
        return this.bugApi.save(toggledBug);
    }

    remove(bugToRemove: Bug): Observable<any> {
        return this.bugApi.remove(bugToRemove);
    }

    getAll(): Observable<Bug[]> {
        return this.bugApi.getAll();
    }

}



//Using bugStorage
/* @Injectable()
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

} */