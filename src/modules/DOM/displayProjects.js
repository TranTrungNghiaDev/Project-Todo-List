import { projectList } from "../..";
import { deleteProject } from "../logic/project/deleteProject";
import { displayTodo } from "./displayTodo";
import { refreshContentDiv } from "./refreshContentDiv";

function displayProjects() {
    const contentDiv = document.querySelector("#content");

    projectList.forEach(project => {
        const projectSection = document.createElement("section");
        projectSection.id = project.id;
        const projectDueDate = document.createElement("h2");
        projectDueDate.textContent = project.dueDate;

        const editBtn = document.createElement("button");
        editBtn.textContent = "Edit";

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.addEventListener("click", () => {
            deleteProject(projectList, project.id);
            refreshContentDiv();
        })

        const addTodoBtn = document.createElement("button");
        addTodoBtn.textContent = "Add new todo";

        projectSection.appendChild(projectDueDate);
        projectSection.appendChild(editBtn);
        projectSection.appendChild(deleteBtn);
        displayTodo(projectSection, project);
        projectSection.appendChild(addTodoBtn);
        contentDiv.appendChild(projectSection);
    })
}

export {displayProjects}