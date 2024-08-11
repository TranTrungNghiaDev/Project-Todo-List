import "./styles.css";
import { addNewProject } from "./modules/logic/project/addNewProject";
import { displayProjects } from "./modules/DOM/displayElement/displayProjects";
import { addTodo } from "./modules/logic/todo/addTodo";
import { createAddProjectBtn } from "./modules/DOM/createElement/createAddProjectBtn";
import { getProjectList } from "./modules/logic/localStorage/getProjectList";

if (!window.localStorage.getItem("projectList")) {
    localStorage.setItem("projectList", "[]");
    const projectList = getProjectList();
    console.log(window.localStorage);
    addNewProject(projectList, "Today");
}

displayProjects();
createAddProjectBtn();