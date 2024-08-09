function addTodo(projectList, projectId, title, description, dueDate, priority) {
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
}

export {addTodo}