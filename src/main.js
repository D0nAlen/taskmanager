"use strict";
import {createSiteMenuTemplate} from "./components/menu.js";
import {createFilterTemplate} from "./components/filter.js";
import {createBoardTemplate} from "./components/boardContainer.js";
import {createTaskTemplate} from "./components/task.js";
import {createTaskEditTemplate} from "./components/taskEdit.js";
import {createLoadMoreButtonTemplate} from "./components/loadMoreButton.js";


const render = (container, template, place = "beforeend") => {
  container.insertAdjacentHTML(place, template);
};

const siteMainElement = document.querySelector(".main");
const siteHeaderElement = siteMainElement.querySelector(".main__control");

render(siteHeaderElement, createSiteMenuTemplate());
render(siteMainElement, createFilterTemplate());
render(siteMainElement, createBoardTemplate());

const taskListElement = siteMainElement.querySelector(".board__tasks");
const boardElement = siteMainElement.querySelector(".board");

render(taskListElement, createTaskEditTemplate());

const TASK_COUNT = 3;
for (let i = 0; i < TASK_COUNT; i++) {
  render(taskListElement, createTaskTemplate());
}

render(boardElement, createLoadMoreButtonTemplate());
