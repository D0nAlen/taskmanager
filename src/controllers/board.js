import LoadMoreButtonComponent from "../components/load-more-button.js";
import TaskEditComponent from "../components/task-edit.js";
import TaskComponent from "../components/task.js";
import TasksComponent from "../components/tasks.js";
import NoTasksComponent from "../components/no-tasks.js";
import SortComponent from "../components/sort.js";
import { render, replace, remove, RenderPosition } from "../utils/render.js";

const SHOWING_TASKS_COUNT_ON_START = 8;
const SHOWING_TASKS_COUNT_BY_BUTTON = 8;

const renderTask = (taskListElement, task) => {
    const replaceTaskToEdit = () => {
        replace(taskEditComponent, taskComponent);
    };

    const replaceEditToTask = () => {
        replace(taskComponent, taskEditComponent);
    };

    const onEscKeyDown = (evt) => {
        const isEscKey = evt.key === `Escape` || evt.key === `Esc`;

        if (isEscKey) {
            replaceEditToTask();
            document.removeEventListener(`keydown`, onEscKeyDown);
        }
    };

    const taskComponent = new TaskComponent(task);
    const taskEditComponent = new TaskEditComponent(task);

    taskComponent.setEditButtonClickHandler(() => {
        // const editButton = taskComponent.getElement().querySelector(".card__btn--edit");
        // editButton.addEventListener(`click`, () => {
        replaceTaskToEdit();
        document.addEventListener(`keydown`, onEscKeyDown);
    });

    taskEditComponent.setSubmitHandler((evt) => {
        // const editForm = taskEditComponent.getElement().querySelector(`form`);
        // editForm.addEventListener(`submit`, (evt) => {
        evt.preventDefault();
        replaceEditToTask();
        document.removeEventListener(`keydown`, onEscKeyDown);
    });

    render(taskListElement, taskComponent, RenderPosition.BEFOREEND);
};

export default class BoardController {
    constructor(container) {
        this._container = container;

        this._noTasksComponent = new NoTasksComponent();
        this._sortComponent = new SortComponent();
        this._tasksComponent = new TasksComponent();
        this._loadMoreButtonComponent = new LoadMoreButtonComponent();
    }

    render(tasks) {
        const renderLoadMoreButton = () => {
            if (showingTasksCount >= tasks.length) {
                return;
            }

            render(container, this._loadMoreButtonComponent, RenderPosition.BEFOREEND);

            this._loadMoreButtonComponent.setClickHandler(() => {
                const prevTasksCount = showingTasksCount;
                showingTasksCount = showingTasksCount + SHOWING_TASKS_COUNT_BY_BUTTON;


                tasks.slice(prevTasksCount, showingTasksCount)
                    .forEach((task) => renderTask(taskListElement, task));

                if (showingTasksCount >= tasks.length) {
                    remove(this._loadMoreButtonComponent);
                }
            });
        }

        const container = this._container.getElement();
        const isAllTasksArchived = tasks.every((task) => task.isArchive);

        if (isAllTasksArchived) {
            render(container, this._noTasksComponent, RenderPosition.BEFOREEND);
            return;
        }

        render(container, this._sortComponent, RenderPosition.BEFOREEND);
        render(container, this._tasksComponent, RenderPosition.BEFOREEND);

        const taskListElement = this._tasksComponent.getElement();

        let showingTasksCount = SHOWING_TASKS_COUNT_ON_START;
        tasks.slice(0, showingTasksCount).forEach((task) => {
            renderTask(taskListElement, task);
        });

        renderLoadMoreButton();

        this._sortComponent.setSortTypeChangeHandler((sortType) => {
            showingTasksCount = SHOWING_TASKS_COUNT_BY_BUTTON;

            const sortedTasks = getSortedTasks(tasks, sortType, 0, showingTasksCount);

            taskListElement.innerHTML = ``;

            sortedTasks.slice(0, showingTasksCount).forEach((task) => {
                renderTask(taskListElement, task);
            });

            renderLoadMoreButton();
        });
    }
}