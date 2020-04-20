import { ThoughtStore } from "./thought-store";

export class RootStore {
    thoughtStore: ThoughtStore;

    constructor() {
        this.thoughtStore = new ThoughtStore();
    }

}