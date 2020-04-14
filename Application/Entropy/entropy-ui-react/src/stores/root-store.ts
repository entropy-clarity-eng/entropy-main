import { ThoughtStore } from "./thought-store";

export class RootStore {
    thoughtStore: any;

    constructor() {
        this.thoughtStore = new ThoughtStore();
    }

}