import { Injectable } from '@angular/core';
import { ThoughtModel } from './models/thought.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment} from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ThoughtApiPersistenceService {

   

  readonly httpOptions = {
    headers: new HttpHeaders({ 
      'Access-Control-Allow-Headers':'content-type',
    
    })
  };

  constructor(private http: HttpClient) { }


addThought(thought:ThoughtModel){
   
  return this.http.post(`${environment.baseAPIUrl}/thoughts`,thought).toPromise();
   }
}