function editProject(projectList, projectId, dueDate) {
    const projectIndex = projectList.findIndex(project => project.id === projectId);
    if(projectIndex < 0) {
        alert("Project is not exist");
    }
    else {
        projectList[projectIndex].dueDate = dueDate;
        alert("Change complete");
    }
}

export {editProject}