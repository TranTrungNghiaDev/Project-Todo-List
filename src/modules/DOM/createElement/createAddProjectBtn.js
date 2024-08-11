import { addNewProject } from "../../logic/project/addNewProject";
import { refreshContentDiv } from "../refreshContentDiv";
import { createInputElement } from "./createInputElement";

function createAddProjectBtn() {
    const bodyElement = document.querySelector("body");

    const addNewProjectBtn = document.createElement("button");
    addNewProjectBtn.id = "add-project-btn";
    addNewProjectBtn.textContent = "Add New Project";
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
        addNewProject(dateInput.value.toString());
        refreshContentDiv();
        dialog.close();
        alert("Add complete");
    })

    form.appendChild(formTitle);
    form.appendChild(submitBtn);
    dialog.appendChild(form);

    bodyElement.appendChild(addNewProjectBtn);
    bodyElement.appendChild(dialog);
}

export {createAddProjectBtn}