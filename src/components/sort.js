import { createElement } from "../utils.js";
import AbstractComponent from "./abstract-component.js";

const createSortTemplate = () => {
  return `<div class="board__filter-list">
        <a href="#" class="board__filter" data-sort-type="default">SORT BY DEFAULT</a>
        <a href="#" class="board__filter" data-sort-type="date-up">SORT BY DATE up</a>
        <a href="#" class="board__filter" data-sort-type="date-down">SORT BY DATE down</a>
    </div>
    `;
};

export default class SortComponent extends AbstractComponent {
  getTemplate() {
    return createSortTemplate();
  }
}
