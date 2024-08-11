import { deleteProject } from "../../logic/project/deleteProject";
import { displayTodo } from "./displayTodo";
import { refreshContentDiv } from "../refreshContentDiv";
import { createAddTodoBtn } from "../createElement/createAddTodoBtn";
import { createEditProjectBtn } from "../createElement/createEditProjectBtn";
import { getProjectList } from "../../logic/localStorage/getProjectList";

function displayProjects() {    
    const contentDiv = document.querySelector("#content");
    const projectList = getProjectList();

    if (projectList.length > 0) {
        projectList.forEach(project => {
            const projectSection = document.createElement("section");
            projectSection.classList.add("project-section");
            const titleSection = document.createElement("section");
            titleSection.classList.add("project-title-section")
            const buttonListSection = document.createElement("section");
            buttonListSection.classList.add("button-list-section");

            projectSection.id = project.id;
            const projectDueDate = document.createElement("h2");
            projectDueDate.textContent = project.dueDate;

            const deleteBtn = document.createElement("button");
            deleteBtn.textContent = "Delete Project";
            deleteBtn.addEventListener("click", () => {
                const result = confirm("Do you want to delete this project ?");
                if (result) {
                    deleteProject(project.id);
                    refreshContentDiv();
                    alert("Delete complete");
                }

            })

            titleSection.appendChild(projectDueDate);
            createEditProjectBtn(buttonListSection, project.id);
            buttonListSection.appendChild(deleteBtn);
            titleSection.appendChild(buttonListSection);
            projectSection.appendChild(titleSection);
            displayTodo(projectSection, project);
            createAddTodoBtn(projectSection, project.id);
            contentDiv.appendChild(projectSection);
        })
    }

}

export { displayProjects }