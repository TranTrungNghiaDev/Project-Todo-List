function editTodo(projectList, projectId, todoId ,title, description, dueDate, priority) {
    const projectPosition = projectList.findIndex(project => project.id === projectId);
    const project = projectList[projectPosition];

    const todoPosition = project.todoList.findIndex(todo => todo.id === todoId);
    const todo = project.todoList[todoPosition];
    
    todo.title = title;
    todo.description = description;
    todo.dueDate = dueDate;
    todo.priority = priority;
}

export {editTodo}