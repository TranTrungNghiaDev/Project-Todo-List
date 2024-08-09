function addNewProject(projectList, dueDate) {
    const project = {
        id : "",
        dueDate,
        todoList: []
    }
    projectList.push(project);
    project.id = projectList.length - 1;
}

export {addNewProject}