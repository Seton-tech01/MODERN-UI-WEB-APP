function button({
	text="", 
	leftIcon="", 
	rightIcon="", 
	id="", 
	type="primary-btn",
  onClick="",
  style = "w-35 px-7.5 py-2 rounded-md transition duration-300 cursor-pointer"
}) {
  return `
        <button id="${id}" class=" ${style} ${type}" onclick="${onClick}">
            ${leftIcon ? `<i class="bi ${leftIcon}"></i>` : ""}
            ${text}
            ${rightIcon ? `<i class="bi ${rightIcon}"></i>` : ""}
        </button>
    `
}

function renderButton(targetId, config) {
  document.getElementById(targetId).innerHTML += button(config);

  if (config.onClick) {
    document.getElementById(config.id).addEventListener("click", config.onClick);
  }
}
