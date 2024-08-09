function changeIdDependIndex(projectList) {
    for (let index = 0; index < projectList.length; index++) {
        projectList[index].id = index;
    };
}

export {changeIdDependIndex}