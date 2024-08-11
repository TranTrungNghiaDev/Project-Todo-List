import { refreshContentDiv } from "../refreshContentDiv";
import { createLabelElement } from "./createLabelElement";
import { createInputElement } from "./createInputElement";
import { createSelectElement } from "./createSelectElement";
import { addTodo } from "../../logic/todo/addTodo";

function createAddTodoBtn(parentElement, projectId) {
    const showDialogBtn = document.createElement("button");
    showDialogBtn.type = "button";
    showDialogBtn.textContent = "Add Todo";
    showDialogBtn.classList.add("todo-btn");
    showDialogBtn.addEventListener("click", () => {
        dialog.showModal();
    })

    const dialog = document.createElement("dialog");
    const form = document.createElement("form");
    form.method = "dialog";

    createLabelElement(form, "taskName", "Task Name: ");
    const taskNameInput = createInputElement("taskName", "text");
    form.appendChild(taskNameInput);

    createLabelElement(form, "description", "Description: ");
    const descriptionInput = createInputElement("description", "text");
    form.appendChild(descriptionInput);

    createLabelElement(form, "priority", "Priority: ");
    const priorityInput = createSelectElement("priority", null, "High", "Medium", "Low");
    form.appendChild(priorityInput);

    createLabelElement(form, "Duedate", "Due date: ");
    const dueDateInput = createInputElement("dueDate", "time");
    form.appendChild(dueDateInput);

    const submitBtn = document.createElement("button");
    submitBtn.type = "submit";
    submitBtn.textContent = "Submit";

    submitBtn.addEventListener("click", (e) => {
        e.preventDefault();
        const title = taskNameInput.value;
        const description = descriptionInput.value;
        const dueDate = dueDateInput.value;
        const priority = priorityInput.value;

        addTodo(projectId, title, description, dueDate, priority)
        refreshContentDiv();
        dialog.close();
        alert("Add complete");
    })

    form.appendChild(submitBtn);
    dialog.appendChild(form);

    parentElement.appendChild(showDialogBtn);
    parentElement.appendChild(dialog);
}

export { createAddTodoBtn }