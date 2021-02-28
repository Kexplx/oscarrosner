const caretProjects = document.getElementById("caretProjects");
const caretTechnologies = document.getElementById("caretTechnologies");
const caretWelcome = document.getElementById("caretWelcome");

const sectionProjects = document.getElementById("sectionProjects");
const sectionWelcome = document.getElementById("sectionWelcome");
const sectionTechnologies = document.getElementById("sectionTechnologies");

caretProjects.addEventListener("click", () =>
  handleCollapseClick(caretProjects, sectionProjects)
);

caretTechnologies.addEventListener("click", () =>
  handleCollapseClick(caretTechnologies, sectionTechnologies)
);

caretWelcome.addEventListener("click", () =>
  handleCollapseClick(caretWelcome, sectionWelcome)
);

function handleCollapseClick(caret, elementToCollapse) {
  const isCollapsed = elementToCollapse.classList.contains("collapsed");

  if (isCollapsed) {
    elementToCollapse.classList.remove("collapsed");
    caret.setAttribute("src", "./caret-down-solid.svg");

    return;
  }

  elementToCollapse.classList.add("collapsed");
  caret.setAttribute("src", "./caret-right-solid.svg");
}
