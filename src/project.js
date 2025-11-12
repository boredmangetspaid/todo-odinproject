class Project {
    constructor(projectName, todos = []) {
        this.projectName = projectName;
        this.todos = todos;
    }

    addTodo(toDo) {
        this.todos.push(toDo)
    }

    removeTodo(id) {
        for (let i = 0; i < this.todos.length; i++) {
            if (this.todos[i].id == id) {
                this.todos.splice(i, 1);
                break
            }
        }
    }

    findTodo(id) {
        for (let i = 0; i < this.todos.length; i++) {
            if (this.todos[i].id === id) {
                return this.todos[i]
            }
        }
        return null;
    }
    editTodo(id, updates) {
        const todo = this.findTodo(id)
        if (todo) {
            todo.update(updates)
        }
    }

    getTodos() {
        return this.todos;
    }

    toggleComplete(id) {
        const todo = this.findTodo(id)
        if (todo) {
            todo.toggleComplete();
        }
    }

}