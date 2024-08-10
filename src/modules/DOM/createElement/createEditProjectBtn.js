import { projectList } from "../../..";
import { addNewProject } from "../../logic/project/addNewProject";
import { editProject } from "../../logic/project/editProject";
import { refreshContentDiv } from "../refreshContentDiv";
import { createInputElement } from "./createInputElement";

function createEditProjectBtn(projectElement, projectId) {
    const addNewProjectBtn = document.createElement("button");
    addNewProjectBtn.textContent = "Edit Project";
    addNewProjectBtn.addEventListener("click", () => {
        dialog.showModal();
    })

    const dialog = document.createElement("dialog");
    const form = document.createElement("form");
    const formTitle = document.createElement("h2");
    formTitle.textContent = "Choose Date For Your Project";
    const dateInput = createInputElement("project-date", "date");
    form.appendChild(dateInput);

    const submitBtn = document.createElement("button");
    submitBtn.textContent = "Submit";
    submitBtn.addEventListener("click", (e) => {
        e.preventDefault();
        editProject(projectList, projectId, dateInput.value.toString());
        refreshContentDiv();
        dialog.close();
    })

    form.appendChild(formTitle);
    form.appendChild(submitBtn);
    dialog.appendChild(form);

    projectElement.appendChild(addNewProjectBtn);
    projectElement.appendChild(dialog);
}

export {createEditProjectBtn}