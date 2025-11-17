import ProjectItem from "../components/ProjectItem"

const projectList = function (app){
    const projects =app.getProjects()
    const projectContainer= document.createElement("div");
    projectContainer.id = "projectContainer";
    
    for (let project of projects){
        projectContainer.appendChild(new ProjectItem(project))
    }
}