import { getProjectList } from "../localStorage/getProjectList";
import { setProjectList } from "../localStorage/setProjectList";

function editProject(projectId, dueDate) {
    const projectList = getProjectList();
    const projectIndex = projectList.findIndex(project => project.id === projectId);
    if(projectIndex < 0) {
        alert("Project is not exist");
    }
    else {
        projectList[projectIndex].dueDate = dueDate;
        setProjectList(projectList);
    }
}

export {editProject}