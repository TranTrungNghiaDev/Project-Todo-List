import { projectList } from "../..";
import { deleteTodo } from "../logic/todo/deleteTodo";
import { displayProjects } from "./displayProjects";
import { refreshContentDiv } from "./refreshContentDiv";

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

        listSection.appendChild(taskNameItem);
        listSection.appendChild(descriptionItem);
        listSection.appendChild(dueDateItem);
        todoSection.appendChild(listSection);
        projectElement.appendChild(todoSection);
    });
    

}

export {displayTodo}