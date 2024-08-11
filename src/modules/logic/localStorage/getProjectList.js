import { setProjectList } from "./setProjectList";

function getProjectList() {
    const localStorage = window.localStorage;
    let projectList = localStorage.getItem("projectList");
    
    if (projectList == "undefined") {
        projectList = [];
    }
    else {
        projectList = JSON.parse(localStorage.getItem("projectList"));
    }

    return projectList;
}

export {getProjectList}