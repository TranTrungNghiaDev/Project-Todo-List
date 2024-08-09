function changeIdDependIndex(project) {
    for (let index = 0; index < project.todoList.length; index++) {
        project.todoList[index].id = index;
    };
}

export {changeIdDependIndex}