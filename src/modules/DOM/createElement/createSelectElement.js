import { createSelectOptionElement } from "./createSelectOptionElement";

function createSelectElement(name, selectedOption = null,...options) {
    const select = document.createElement("select");
    select.id = name;
    select.name = name;
    createSelectOptionElement(select, selectedOption, ...options);
    
    return select;
}

export {createSelectElement};