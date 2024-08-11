import { getProjectList } from "../localStorage/getProjectList";
import { setProjectList } from "../localStorage/setProjectList";

function changeIdDependIndex() {
    const projectList = getProjectList();
    for (let index = 0; index < projectList.length; index++) {
        projectList[index].id = index;
        setProjectList(projectList);
    };
}

export {changeIdDependIndex}