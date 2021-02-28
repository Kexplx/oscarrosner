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
    caret.classList.add("fa-caret-down");
    caret.classList.remove("fa-caret-right");

    return;
  }

  elementToCollapse.classList.add("collapsed");
  caret.classList.add("fa-caret-right");
  caret.classList.remove("fa-caret-up");
}
