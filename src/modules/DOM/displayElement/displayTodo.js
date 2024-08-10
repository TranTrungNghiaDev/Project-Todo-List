import { projectList } from "../../..";
import { deleteTodo } from "../../logic/todo/deleteTodo";
import { refreshContentDiv } from "../refreshContentDiv";
import { createEditTodoBtn } from "../createElement/createEditTodoBtn";

function displayTodo(projectElement, projectData) {
    const todoListData = projectData.todoList;
    todoListData.forEach(todo => {
        const todoSection = document.createElement("section");
        const priority = todo.priority;
        todoSection.classList.add(priority);

        const listSection = document.createElement("ul");
        const taskNameItem = document.createElement("li");

        const radioInput = document.createElement("input");
        radioInput.type = "radio";
        radioInput.addEventListener("click", () => {            
            deleteTodo(projectList, projectData.id, todo.id);
            refreshContentDiv();
        })

        const taskNameSpan = document.createElement("span");
        taskNameSpan.textContent = todo.title;
        taskNameItem.appendChild(radioInput);
        taskNameItem.appendChild(taskNameSpan);

        const descriptionItem = document.createElement("li");
        descriptionItem.textContent = todo.description;

        const dueDateItem = document.createElement("li");
        dueDateItem.textContent = todo.dueDate;

        const editItem = document.createElement("li");
        createEditTodoBtn(editItem,projectData.id, todo);

        const deleteItem = document.createElement("li");
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.addEventListener("click", () => {
            deleteTodo(projectList, projectData.id, todo.id);
            refreshContentDiv();
        })
        deleteItem.appendChild(deleteBtn);

        listSection.appendChild(taskNameItem);
        listSection.appendChild(descriptionItem);
        listSection.appendChild(dueDateItem);
        listSection.appendChild(editItem);
        listSection.appendChild(deleteItem);
        
        todoSection.appendChild(listSection);
        projectElement.appendChild(todoSection);
    });
    

}

export {displayTodo}