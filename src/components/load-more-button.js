import { createElement } from "../utils.js";
import AbstractComponent from "./abstract-component.js";

const createLoadMoreButtonTemplate = () => {
  return `<button class="load-more" type="button">load more</button>`;
};

export default class LoadMoreButtonComponent extends AbstractComponent {
  getTemplate() {
    return createLoadMoreButtonTemplate();
  }
}
