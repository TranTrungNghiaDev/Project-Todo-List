function createInputElement(name, type, value = null) {
    const input = document.createElement("input");
    input.id = name;
    input.name = name;
    input.type = type;
    input.value = value;
    input.required = true;
    return input;
}

export {createInputElement}