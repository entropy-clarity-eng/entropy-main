
//Represents a rich error object for HTTP related errors
///TO-DO: Hook this up to an AXIOS errors to get same result



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