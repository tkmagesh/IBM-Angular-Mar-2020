import { Bug } from '../models/Bug';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class BugApiService {
    
    private serviceEndPoint: string = 'http://localhost:3000/bugs';

    constructor(private http : HttpClient){

    }
    save(bugData: Bug): Observable<Bug> {
        if (bugData.id === 0){
            return this.http
                .post<Bug>(this.serviceEndPoint, bugData);
        } else {
            return this.http
                .put<Bug>(`${this.serviceEndPoint}/${bugData.id}`, bugData)
        }
    }
    remove(bugData: Bug): Observable<any> {
        return this.http
            .delete(`${this.serviceEndPoint}/${bugData.id}`);
    }
    getAll(): Observable<Bug[]> {
        return this.http
            .get<Bug[]>(this.serviceEndPoint)
    }
}