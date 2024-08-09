import { displayProjects } from "./displayProjects";

function refreshContentDiv() {
    const contentDiv = document.querySelector("#content");
    contentDiv.innerHTML = "";
    displayProjects();
}

export {refreshContentDiv}