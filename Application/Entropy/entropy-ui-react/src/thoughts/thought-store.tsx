import { action } from "mobx";

export class ThoughtStore {

    @action
    add(thoughtText: string) {
        console.log(`${thoughtText} received,  thanks.`)
    }

}