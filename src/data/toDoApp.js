import "./styles.css";
class ToDoApp {
    constructor(storage){
        this.storage = storage
    }
    
    addProject(Project){
        this.storage.add(Project);
    }

    getProjects(){
       return this.storage.getProjects()
    }

    removeProject(projectName){
        this.storage.remove(projectName)
    }

    editProject(projectName,updates){
        this.storage.editProject(projectName,updates)
    }
}

export default ToDoApp;