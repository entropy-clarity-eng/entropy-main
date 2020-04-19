
//Represents a rich error object for HTTP related errors
///TO-DO: Hook this up to an AXIOS errors to get same result

import { AxiosError } from "axios";



export class APIPersistenceError {
    
    public isConnectionError:boolean;
    

    constructor(public readonly sourceError:AxiosError ) {
       
        if (sourceError.request) {
      
            this.isConnectionError = true;
            
            
          } else {
           this.isConnectionError = false;
             
          }

    }
}