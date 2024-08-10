function createSelectOptionElement(parentElement, selectedOption, ...options) {
    const defaultOption = document.createElement("option");
    defaultOption.textContent = "Choose your priority";
    parentElement.appendChild(defaultOption);
    options.forEach(option => {
        const optionElement = document.createElement("option");
        optionElement.textContent = option;
        if(option === selectedOption) {
            optionElement.selected = true;
        }
        parentElement.appendChild(optionElement);
    })
}

export { createSelectOptionElement }