import axios from 'axios';
import { ThoughtModel } from './thought-model';
import { APIPersistenceError } from '../general/api-persistence-error';

export class ThoughtAPI {

    

    static async addThought(thought:ThoughtModel):Promise<null | APIPersistenceError> {
        return axios.post(`${process.env.REACT_APP_BASE_API_URL}/thoughts`,thought,{
            headers:[{'content-type': 'application/json'}]
        
        })
               .then(result => null,error => new APIPersistenceError(error));
    }

}