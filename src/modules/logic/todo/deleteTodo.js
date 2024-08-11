import { getProjectList } from "../localStorage/getProjectList";
import { setProjectList } from "../localStorage/setProjectList";
import { changeIdDependIndex } from "./changeIdDependIndex";

function deleteTodo(projectId, todoId) {
    const projectList = getProjectList();
    const projectPosition = projectList.findIndex(project => project.id === projectId);
    const project = projectList[projectPosition];

    const todoPosition = project.todoList.findIndex(todo => todo.id === todoId);
    project.todoList.splice(todoPosition, 1);
    changeIdDependIndex(project);
    setProjectList(projectList);
}

export {deleteTodo}