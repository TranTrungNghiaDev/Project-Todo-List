import { getProjectList } from "../localStorage/getProjectList";
import { setProjectList } from "../localStorage/setProjectList";
import {changeIdDependIndex} from "./changeIdDependIndex"

function deleteProject(projectId) {
    const projectList = getProjectList();
    const projectIndex = projectList.findIndex(project => project.id === projectId);
    if(projectIndex < 0) {
        alert("Project is not exist");
    }
    else {
        projectList.splice(projectIndex, 1);
        setProjectList(projectList);
        changeIdDependIndex();
    }
}

export {deleteProject}