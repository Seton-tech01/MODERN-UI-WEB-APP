function input({
  id = "",
  placeholder = "",
  type = "",
  value = "",
  className = "w-full px-4 py-2 border border-gray-300 rounded-md"
}) {
  return `
        <input 
            id="${id}" 
            type="${type}" 
            placeholder="${placeholder}" 
            value="${value}" 
            class="${className}"
        />
    `;
}

function renderInput(targetId, config) {
  document.getElementById(targetId).innerHTML += input(config);

  const element = document.getElementById(config.id);

  if (config.onInput) {
    element.addEventListener("input", config.onInput);
  }

  if (config.onChange) {
    element.addEventListener("change", config.onChange);
  }
}
