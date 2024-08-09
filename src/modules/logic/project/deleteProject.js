import {changeIdDependIndex} from "./changeIdDependIndex"

function deleteProject(projectList, projectId) {
    const projectIndex = projectList.findIndex(project => project.id === projectId);
    if(projectIndex < 0) {
        alert("Project is not exist");
    }
    else {
        projectList.splice(projectIndex, 1);
        changeIdDependIndex(projectList);
        alert("Delete complete");
    }
}

export {deleteProject}