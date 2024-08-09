function addNewProject(projectList, id, dueDate) {
    const project = {
        id,
        dueDate,
        todoList: []
    }
    
    projectList.push(project);
}