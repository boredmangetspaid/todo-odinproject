import {v4 as uuidv4} from "uuid";

class Todo {
    constructor(name,description,begin,end,completed=false){
        this.id=uuidv4();
        this.name=name;
        this.description= description;
        this.begin=begin;
        this.end=end;
        this.completed=completed;
    }

    toggleComplete(){
        this.completed= !this.completed;
    }

    update(updates){
        Object.assign(this,updates);
    }
}

export default Todo;