const key = "projects"
const storage = {

    getProjects() {
        const projects = localStorage.getItem(key)
        return projects ? JSON.parse(projects) : [];
    },
    saveProjects(projects) {
        localStorage.setItem(key, JSON.stringify(projects));
    },

    add(project) {
        const projects = this.getProjects();
        projects.push(project);
        this.saveProjects(projects);
    },

    remove(projectName) {
        let projects = this.getProjects();
        projects = projects.filter(p => p.projectName !== projectName);
        this.saveProjects(projects)
    },

    editProject(oldProjectName, updates) {
        const projects = this.getProjects()
        const project = projects.find(p => p.projectName === oldProjectName);
        if (project) {
            Object.assign(project, updates)
        }
        this.saveProjects(projects);
    }
}

export default storage