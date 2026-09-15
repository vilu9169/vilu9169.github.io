"use strict";

const cards = Array.from(document.querySelectorAll(".project-card"));
const sections = Array.from(document.querySelectorAll(".featured-section, .more-section"));
const filters = Array.from(document.querySelectorAll(".filter"));
const search = document.getElementById("search");
const summary = document.getElementById("search-summary");
const resultCount = document.getElementById("result-count");
const emptyState = document.getElementById("empty-state");
let category = "all";

// All content lives in HTML, so the portfolio also works without JavaScript.
const projectIndex = cards.map(card => ({
  card,
  categories: card.dataset.categories.split(" "),
  text: `${card.dataset.keywords} ${card.querySelector(".card-content").textContent}`.toLocaleLowerCase("en"),
}));

function updateProjects() {
  const query = search.value.trim().toLocaleLowerCase("en");
  const words = query.split(/\s+/).filter(Boolean);
  let visibleCount = 0;

  projectIndex.forEach(({ card, categories, text }) => {
    const visible = (category === "all" || categories.includes(category)) && words.every(word => text.includes(word));
    card.hidden = !visible;
    if (visible) visibleCount += 1;
  });

  filters.forEach(button => {
    const active = button.dataset.filter === category;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });
  sections.forEach(section => {
    section.hidden = !Array.from(section.querySelectorAll(".project-card")).some(card => !card.hidden);
  });

  summary.hidden = category === "all" && !query;
  resultCount.textContent = `${visibleCount} ${visibleCount === 1 ? "project" : "projects"} found`;
  emptyState.hidden = visibleCount > 0;
}

function resetProjects() {
  category = "all";
  search.value = "";
  updateProjects();
  search.focus({ preventScroll: true });
}

filters.forEach(button => button.addEventListener("click", () => {
  category = button.dataset.filter;
  updateProjects();
}));
search.addEventListener("input", updateProjects);
document.getElementById("reset-filters").addEventListener("click", resetProjects);
document.getElementById("empty-reset").addEventListener("click", resetProjects);
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("project-tools").hidden = false;
