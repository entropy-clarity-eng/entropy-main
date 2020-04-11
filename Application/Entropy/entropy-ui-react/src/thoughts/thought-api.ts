import axios from 'axios';
import { ThoughtModel } from './thought-model';

export class ThoughtAPI {

    static async addThought(thought:ThoughtModel):Promise<null> {
        return axios.post(`${environment.baseAPIUrl}/thoughts`,thought);
    }

}