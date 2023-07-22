"use strict";
import { createSiteMenuTemplate } from "./components/menu.js";
import { createFilterTemplate } from "./components/filter.js";
import { createBoardTemplate } from "./components/boardContainer.js";
import { createTaskTemplate } from "./components/task.js";
import { createTaskEditTemplate } from "./components/taskEdit.js";
import { createLoadMoreButtonTemplate } from "./components/loadMoreButton.js";
import { generateFilters } from "./mock/filter.js";
import { generateTasks } from "./mock/task.js";

const TASK_COUNT = 22;
const SHOWING_TASKS_COUNT_ON_START = 8;
const SHOWING_TASKS_COUNT_BY_BUTTON = 8;

const render = (container, template, place = "beforeend") => {
  container.insertAdjacentHTML(place, template);
};

const siteMainElement = document.querySelector(".main");
const siteHeaderElement = siteMainElement.querySelector(".main__control");

const filters = generateFilters();
const tasks = generateTasks(TASK_COUNT);

render(siteHeaderElement, createSiteMenuTemplate());
render(siteMainElement, createFilterTemplate(filters));
render(siteMainElement, createBoardTemplate());

const taskListElement = siteMainElement.querySelector(".board__tasks");
const boardElement = siteMainElement.querySelector(".board");

render(taskListElement, createTaskEditTemplate(tasks[0]));

let showingTasksCount = SHOWING_TASKS_COUNT_ON_START;

for (let i = 1; i < showingTasksCount; i++) {
  render(taskListElement, createTaskTemplate(tasks[i]));
}


render(boardElement, createLoadMoreButtonTemplate());
const loadMoreButton = boardElement.querySelector(`.load-more`);
loadMoreButton.addEventListener(`click`, () => {
  const prevTasksCount = showingTasksCount;
  showingTasksCount = showingTasksCount + SHOWING_TASKS_COUNT_BY_BUTTON;

  tasks
    .slice(prevTasksCount, showingTasksCount)
    .forEach((task) =>
      render(taskListElement, createTaskTemplate(task), `beforeend`)
    );

  if (showingTasksCount >= tasks.length) {
    loadMoreButton.remove();
  }
});
