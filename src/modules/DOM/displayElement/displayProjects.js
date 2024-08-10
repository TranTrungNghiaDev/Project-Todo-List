import { projectList } from "../../..";
import { deleteProject } from "../../logic/project/deleteProject";
import { displayTodo } from "./displayTodo";
import { refreshContentDiv } from "../refreshContentDiv";
import { createAddTodoBtn } from "../createElement/createAddTodoBtn";
import { createEditProjectBtn } from "../createElement/createEditProjectBtn";

function displayProjects() {
    const contentDiv = document.querySelector("#content");

    projectList.forEach(project => {
        const projectSection = document.createElement("section");
        projectSection.id = project.id;
        const projectDueDate = document.createElement("h2");
        projectDueDate.textContent = project.dueDate;

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete Project";
        deleteBtn.addEventListener("click", () => {
            deleteProject(projectList, project.id);
            refreshContentDiv();
        })

        projectSection.appendChild(projectDueDate);
        createEditProjectBtn(projectSection, project.id);
        projectSection.appendChild(deleteBtn);
        displayTodo(projectSection, project);
        createAddTodoBtn(projectSection, project.id);
        contentDiv.appendChild(projectSection);
    })
}

export {displayProjects}