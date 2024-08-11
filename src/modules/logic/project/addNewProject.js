import { getProjectList } from "../localStorage/getProjectList";
import { setProjectList } from "../localStorage/setProjectList";

function addNewProject(dueDate) {
    const projectList = getProjectList();
    const project = {
        id : "",
        dueDate,
        todoList: []
    }
    projectList.push(project);
    project.id = projectList.length - 1;
    setProjectList(projectList);
}

export {addNewProject}