import "./dropdown.css";

function dropdownInit() {
  const containers = document.querySelectorAll(".dropdown");
  for (let container of containers) {
    const contents = container.querySelector(".dropdown-menu");
    if (!contents) continue;
    container.addEventListener("click", (e) => {
      if (e.target.classList.contains("dropdown-button")) {
        contents.classList.toggle("show");
      }
    });
  }
}

export {dropdownInit};