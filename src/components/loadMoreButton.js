import { createElement } from "../utils";

const createLoadMoreButtonTemplate = () => {
  return `
      <button class="load-more" type="button">load more</button>
        `;
};

export default class loadMoreButton {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createLoadMoreButtonTemplate();
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }
    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}
