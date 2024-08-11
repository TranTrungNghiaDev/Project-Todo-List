function setProjectList(projectList) {
    const localStorage = window.localStorage;
    localStorage.setItem("projectList", JSON.stringify(projectList));
}

export {setProjectList}