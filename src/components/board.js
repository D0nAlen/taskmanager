import { createElement } from "../utils.js";
import AbstractComponent from "./abstract-component.js";

const createBoardTemplate = () => {
  return `<section class="board container"></section>`;
};

export default class BoardComponent extends AbstractComponent {
  getTemplate() {
    return createBoardTemplate();
  }

}
