import { Injectable } from '@angular/core';
import { ThoughtModel } from './models/thought.model';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { APIPersistenceError } from './api-persistence-error';

@Injectable({
  providedIn: 'root'
})
export class ThoughtApiPersistenceService {



  readonly httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Headers': 'content-type',

    })
  };

  constructor(private http: HttpClient) { }


  addThought(thought: ThoughtModel) {

    return this.http.post(`${environment.baseAPIUrl}/thoughts`, thought).pipe(
      catchError(this.handleError)

    ).toPromise();
  }

  handleError(error: HttpErrorResponse) {
    
    return throwError(new APIPersistenceError(error))
  }
}