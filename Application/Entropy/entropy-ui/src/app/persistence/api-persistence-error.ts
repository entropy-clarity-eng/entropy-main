import { HttpErrorResponse } from '@angular/common/http';

//Represents a rich error object for HTTP related errors

export class APIPersistenceError {
    
    public isConnectionError:boolean;

    constructor(public sourceError:HttpErrorResponse ) {
       
        if (sourceError.error instanceof ErrorEvent) {
      
            this.isConnectionError = false;
            
            
          } else {
           if(sourceError.status == 0) {
               this.isConnectionError = true;
           } else {
               this.isConnectionError  = false;
           }
             
          }

    }
}