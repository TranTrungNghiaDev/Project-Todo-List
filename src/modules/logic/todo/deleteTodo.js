import { changeIdDependIndex } from "./changeIdDependIndex";

function deleteTodo(projectList, projectId, todoId) {
    const projectPosition = projectList.findIndex(project => project.id === projectId);
    const project = projectList[projectPosition];

    const todoPosition = project.todoList.findIndex(todo => todo.id === todoId);
    project.todoList.splice(todoPosition, 1);
    changeIdDependIndex(project);
}

export {deleteTodo}