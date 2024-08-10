import { editTodo } from "../../logic/todo/editTodo";
import { projectList } from "../../..";
import { refreshContentDiv } from "../refreshContentDiv";
import { createLabelElement } from "./createLabelElement";
import { createInputElement } from "./createInputElement";
import { createSelectElement } from "./createSelectElement";

function createEditTodoBtn(parentElement, projectId, todoData) {
    const showDialogBtn = document.createElement("button");
    showDialogBtn.type = "button";
    showDialogBtn.textContent = "Edit";
    showDialogBtn.addEventListener("click", () => {
        dialog.showModal();
    })

    const dialog = document.createElement("dialog");
    const form = document.createElement("form");
    form.method = "dialog";

    createLabelElement(form, "taskName", "Task Name: ");
    const taskNameInput = createInputElement("taskName", "text", todoData.title);
    form.appendChild(taskNameInput);

    createLabelElement(form, "description", "Description: ");
    const descriptionInput = createInputElement("description", "text", todoData.description);
    form.appendChild(descriptionInput);

    createLabelElement(form, "priority", "Priority: ");
    const priorityInput = createSelectElement("priority", todoData.priority, "High", "Medium", "Low");
    form.appendChild(priorityInput);

    createLabelElement(form, "Duedate", "Due date: ");
    const dueDateInput = createInputElement("dueDate", "time", todoData.dueDate);
    form.appendChild(dueDateInput);

    const submitBtn = document.createElement("button");
    submitBtn.type = "submit";
    submitBtn.textContent = "Submit";

    submitBtn.addEventListener("click", (e) => {
        e.preventDefault();
        const id = todoData.id;
        const title = taskNameInput.value;
        const description = descriptionInput.value;
        const dueDate = dueDateInput.value;
        const priority = priorityInput.value;

        console.log(todoData);

        editTodo(projectList,
            projectId,
            id,
            title,
            description,
            dueDate,
            priority);

        refreshContentDiv();
        console.log(projectList);
        dialog.close();
    })

    form.appendChild(submitBtn);
    dialog.appendChild(form);

    parentElement.appendChild(showDialogBtn);
    parentElement.appendChild(dialog);
}

export { createEditTodoBtn }