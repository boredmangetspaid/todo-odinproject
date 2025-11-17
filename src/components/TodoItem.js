import Todo from "data/todo";
class ToDoItem {
    constructor(onupdate, todo, project) {
        this.project = project
        this.onupdate = onupdate
        this.todo = todo
    }

    render() {
        const toDoDiv = document.createElement("div");
        toDoDiv.id = "todoItem"
        let { name, description, begin, end, urgency,id, completed, } = this.todo
        toDoDiv.className=urgency  
        toDoDiv.innerHTML = `
        <h1>${name}</h1>
        <p>${description} </p>
        <p>date started: ${begin} </p>
        <p>due date: ${end} </p>
        <input type = "checkbox" class = "todo-complete" ${completed?"checked":""}/>
        <button class="todo-delete"> Delete </button>
        `
        toDoDiv.querySelector(".todo-delete").addEventListener("click",()=>{
            this.project.removeTodo(id);
            this.onupdate();
        })

        toDoDiv.querySelector(".todo-complete").addEventListener("change",()=>{
            this.project.toggleComplete(id);
            this.onupdate();
        })
        return toDoDiv;
    }
}