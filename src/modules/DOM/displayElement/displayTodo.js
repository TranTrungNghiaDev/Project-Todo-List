import { deleteTodo } from "../../logic/todo/deleteTodo";
import { refreshContentDiv } from "../refreshContentDiv";
import { createEditTodoBtn } from "../createElement/createEditTodoBtn";

function displayTodo(projectElement, projectData) {
    const todoListData = projectData.todoList;
    todoListData.forEach(todo => {
        const todoSection = document.createElement("section");
        todoSection.classList.add(`${todo.priority}-priority`);
        const priority = todo.priority;
        todoSection.classList.add(priority);

        const listSection = document.createElement("ul");

        const taskNameAndDueDateItem = document.createElement("li");
        const radioInput = document.createElement("input");
        radioInput.type = "radio";
        radioInput.addEventListener("click", () => {            
            deleteTodo(projectList, projectData.id, todo.id);
            refreshContentDiv();
            alert("Congratulations");
        })
        const taskNameAndDueDateSpan = document.createElement("span");
        taskNameAndDueDateSpan.textContent = `${todo.title} - ${todo.dueDate}`;
        taskNameAndDueDateItem.appendChild(radioInput);
        taskNameAndDueDateItem.appendChild(taskNameAndDueDateSpan);

        const descriptionItem = document.createElement("li");
        descriptionItem.textContent = todo.description;

        const editAndDeleteItem = document.createElement("li");
        createEditTodoBtn(editAndDeleteItem,projectData.id, todo);

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.addEventListener("click", () => {
            const result = confirm("Do you want to delete this todo ?");
            if(result) {
                deleteTodo(projectData.id, todo.id);
                refreshContentDiv();
                alert("Delete complete");
            }
        })
        editAndDeleteItem.appendChild(deleteBtn);

        listSection.appendChild(taskNameAndDueDateItem);
        listSection.appendChild(descriptionItem);
        listSection.appendChild(editAndDeleteItem);
        
        todoSection.appendChild(listSection);
        projectElement.appendChild(todoSection);
    });
    

}

export {displayTodo}