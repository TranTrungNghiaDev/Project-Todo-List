import "./styles.css";
import { addNewProject } from "./modules/logic/project/addNewProject";
import { deleteProject } from "./modules/logic/project/deleteProject";

export const projectList = [];

addNewProject(projectList, "Today");
addNewProject(projectList, "Tomorrow");

deleteProject(projectList, 0);
console.log(projectList);
