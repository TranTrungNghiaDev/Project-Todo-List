function createLabelElement(parentElement, inputId, text) {
    const label = document.createElement("label");
    label.textContent = text;
    label.htmlFor = inputId;
    parentElement.appendChild(label);
}

export {createLabelElement}