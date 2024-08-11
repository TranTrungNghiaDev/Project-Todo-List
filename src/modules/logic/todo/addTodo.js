import { getProjectList } from "../localStorage/getProjectList";
import { setProjectList } from "../localStorage/setProjectList";

function addTodo(projectId, title, description, dueDate, priority) {
    const projectList = getProjectList();
    const todo = {
        id: "",
        title,
        description,
        dueDate,
        priority
    }

    const projectPosition = projectList.findIndex(project => project.id === projectId);
    const project = projectList[projectPosition];
    
    project.todoList.push(todo);
    todo.id = project.todoList.length - 1;
    
    setProjectList(projectList);
}

export {addTodo}