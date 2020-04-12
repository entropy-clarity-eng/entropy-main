import axios from 'axios';
import { ThoughtModel } from './thought-model';

export class ThoughtAPI {

    static async addThought(thought:ThoughtModel):Promise<null> {
        return axios.post(`${process.env.REACT_APP_BASE_API_URL}/thoughts`,thought);
    }

}