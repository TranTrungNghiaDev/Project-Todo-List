import "./styles.css";
import { addNewProject } from "./modules/logic/project/addNewProject";
import { displayProjects } from "./modules/DOM/displayProjects";
import { addTodo } from "./modules/logic/todo/addTodo";

export const projectList = [];

addNewProject(projectList, "Today");
addTodo(projectList, 0, "Workout", "Have better healthy", "8:00 AM", "Medium");
addTodo(projectList, 0, "Learn JS", "Have bettet job", "10:00 PM", "High");
addTodo(projectList, 0, "Pratice Project", "Have project to add CV", "12:00 AM", "High");

addNewProject(projectList, "Tomorrow");
addTodo(projectList, 1, "Watch Netflix", "Relax", "9:00 AM", "Low");
addTodo(projectList, 1, "Find IT Job", "Have a nice job", "10:00 AM", "Medium");
addTodo(projectList, 1, "Find another job", "Make money when have IT job", "01:00 PM", "Medium");


displayProjects();
