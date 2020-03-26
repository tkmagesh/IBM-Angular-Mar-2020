import { Bug } from '../models/Bug';

export class BugStorageService{
    private currentBugId: number = 0;
    private storage = window.localStorage;

    save(bugData : Bug) : Bug {
        if (bugData.id === 0)
            bugData.id = ++this.currentBugId;
        this.storage.setItem(bugData.id.toString(), JSON.stringify(bugData));
        return bugData;    
    }
    remove(bugData : Bug) : void {
        this.storage.removeItem(bugData.id.toString());
    }
    getAll() : Bug[] {
        const bugs : Bug[] = [];
        for (let index = 0; index < this.storage.length; index++) {
            const key = this.storage.key(index),
                rawData = this.storage.getItem(key),
                bug = JSON.parse(rawData);
            bugs.push(bug);
            this.currentBugId = this.currentBugId > bug.id ? this.currentBugId : bug.id;
        }
        return bugs;
    }
}