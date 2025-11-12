import {v4 as uuidv4} from "uuid";

class Todo {
    constructor(name,description,begin,end,completed="incomplete"){
        this.id=uuidv4();
        this.name=name;
        this.description= description;
        this.begin=begin;
        this.end=end;
        this.completed=completed;
    }
}