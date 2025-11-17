import storage from './data/Storage';
import ToDoApp from './data/toDoApp';
import Project from './data/project';
import Todo from './data/todo.js';

const app = new ToDoApp(storage);

// Create a new project
const project1 = new Project("Home Tasks");
app.addProject(project1);
console.log("Projects after adding one:", app.getProjects());

// Add todos to project
const todo1 = new Todo("Wash dishes", "Wash all dirty dishes", "2025-11-12", "2025-11-12");
const todo2 = new Todo("Vacuum", "Vacuum living room", "2025-11-12", "2025-11-12");

project1.addTodo(todo1);
project1.addTodo(todo2);

console.log("Todos in project:", project1.getTodos());

// Toggle completion
project1.toggleComplete(todo1.id);
console.log(`Todo "${todo1.name}" completed?`, todo1.completed);

// Edit a todo
project1.editTodo(todo2.id, { name: "Vacuum house", description: "Vacuum all rooms" });
console.log("Updated todos:", project1.getTodos());

// Remove a todo
project1.removeTodo(todo1.id);
console.log("Todos after removing one:", project1.getTodos());

// Edit project name
app.editProject("Home Tasks", { projectName: "House Chores" });
console.log("Projects after renaming:", app.getProjects());

// Remove project
// app.removeProject("House Chores");
// console.log("Projects after removing:", app.getProjects());